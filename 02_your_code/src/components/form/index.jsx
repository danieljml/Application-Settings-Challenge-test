import { useState, useRef, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import BasicAlert from "../alert";
import useBodyBackgroundColor from "../../hooks/useBgColor";
import useLanguage from "../../hooks/useLanguage";
import { useTranslation } from "react-i18next";
import {
  camelCaseStr as toCamelCase,
  isValidEmail,
  isValidTimeZone
} from "../../functions/index";
import "./styles.css";

function Form({ user, setUser, languageOptions, themeOptions }) {
  const {
    user_email,
    language_code,
    theme_name,
    displayed_timezone,
    ENABLED_FEATURES
  } = user;
  const initial_theme = Object.entries(themeOptions).find(
    (item) => item[1] === theme_name
  )[0];
  const initial_language = language_code;
  const { t } = useTranslation();
  const formButtonRef = useRef(null);
  const [features, setFeatures] = useState(ENABLED_FEATURES);
  const [popup, setPopup] = useState({ open: false });
  const { language, changeLanguage } = useLanguage();
  const [bgColor, setBgColor] = useBodyBackgroundColor(initial_theme);

  useEffect(() => {
    console.log(user);
    changeLanguage(initial_language);
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleThemeChange = (event) => {
    const color = Object.entries(themeOptions).find(
      (feature) => feature[1] === event.target.value
    )[0];
    setBgColor(color);
  };

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  const handleFeatureChange = (feature) => {
    console.log("feature ", feature);
    setFeatures((prevFeatureToggles) => ({
      ...prevFeatureToggles,
      [feature]: !prevFeatureToggles[feature]
    }));

    console.log(features);
  };

  const handleFormOnChange = () => {
    formButtonRef.current.disabled = false;
    formButtonRef.current.classList.add("active");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, language, timezone, theme } = Object.fromEntries(formData);

    const newUser = {
      user_email: email || user_email,
      displayed_timezone: timezone || displayed_timezone
    };

    if (!isValidEmail(newUser.user_email)) {
      setPopup({
        open: true,
        severity: "error",
        message: t("invalidEmailMessage")
      });
      handlerAlert();
      e.target.reset();
      return;
    }
    if (!isValidTimeZone(newUser.displayed_timezone)) {
      setPopup({
        open: true,
        severity: "error",
        message: t("invalidTimezoneMessage")
      });
      handlerAlert();
      e.target.reset();
      return;
    }
    setUser((prevUser) => ({
      ...prevUser,
      ...newUser,
      ENABLED_FEATURES: features,
      language_code: language || language_code,
      theme_name: theme || theme_name
    }));

    setPopup({
      open: true,
      severity: "success",
      message: t("updateSuccessMessage")
    });
    handlerAlert();

    formButtonRef.current.disabled = true;
    formButtonRef.current.classList.remove("active");
  };

  const handlerAlert = () =>
    setTimeout(() => {
      setPopup({ open: false });
    }, 2500);

  const renderLanguageOptions = () => {
    return Object.entries(languageOptions).map(([code, language]) => (
      <option key={code} value={code}>
        {language}
      </option>
    ));
  };

  const renderFeatureCheckboxes = () => {
    return Object.entries(features).map(([feature, isEnable]) => (
      <div key={feature} className="form__feature">
        <Switch
          checked={isEnable}
          onChange={() => handleFeatureChange(feature)}
        />
        {t(toCamelCase(feature))}
      </div>
    ));
  };

  return (
    <>
      <form
        className="form"
        onChange={handleFormOnChange}
        onSubmit={handleOnSubmit}
      >
        <div className="form__inputs">
          <div className="form__input">
            <TextField
              name="email"
              id="standard-basic"
              label={t("labelEmailTitle")}
              variant="standard"
              placeholder={user_email}
            />
          </div>
          <div className="form__input">
            <TextField
              name="timezone"
              id="timezone"
              label={t("labelTimezoneTitle")}
              variant="standard"
              placeholder={displayed_timezone}
            />
          </div>
          <div className="form__input">
            <InputLabel htmlFor="language-select">
              {t("labelLanguageTitle")}
            </InputLabel>
            <NativeSelect
              inputProps={{ id: "language-select", name: "language" }}
              onChange={handleLanguageChange}
              value={language}
            >
              {renderLanguageOptions()}
            </NativeSelect>
          </div>
          <div className="form__input">
            <InputLabel htmlFor="theme-select">
              {t("labelThemeTitle")}
            </InputLabel>
            <NativeSelect
              inputProps={{ id: "theme-select", name: "theme" }}
              onChange={handleThemeChange}
              value={themeOptions[bgColor]}
            >
              {Object.values(themeOptions).map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </NativeSelect>
          </div>
        </div>
        <div className="form__features">
          <p>{t("labelFeaturesTitle")}</p>
          <div className="features__container">{renderFeatureCheckboxes()}</div>
        </div>
        <div className="form__btn-container">
          <button className="form__btn" ref={formButtonRef} disabled>
            <ModeEditIcon className="editIcon" /> {t("btnUpdate")}
          </button>
        </div>
      </form>
      {popup.open ? <BasicAlert {...popup} /> : ""}
    </>
  );
}

export default Form;

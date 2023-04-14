import { useState } from "react";
import Sidebar from "../../components/sidebar";
import Form from "../../components/form";
import Banner from "../../components/banner";
import { useTranslation } from "react-i18next";
import "./styles.css";

const DEFAULT_USER = {
  SUBSCRIPTION: "basic",
  CREATION_DATE: "2013-03-10T02:00:00Z",
  LAST_PAYMENT_DATE: "2020-01-10T09:25:00Z",
  theme_name: "Tropical Island",
  ENABLED_FEATURES: {
    CERTIFICATES_INSTRUCTOR_GENERATION: true,
    INSTRUCTOR_BACKGROUND_TASKS: true,
    ENABLE_COURSEWARE_SEARCH: true,
    ENABLE_COURSE_DISCOVERY: true,
    ENABLE_DASHBOARD_SEARCH: true,
    ENABLE_EDXNOTES: true
  },
  language_code: "en",
  banner_message: "<p><span>Welcome</span> to Mr X's website</p>",
  displayed_timezone: "America/Bogota",
  user_profile_image: "https://i.imgur.com/LMhM8nn.jpg",
  user_email: "barack@aol.com"
};
const THEME_OPTIONS = {
  turquoise: "Simply Fabulous",
  lightSteelBlue: "Tropical Island",
  seaGreen: "Safari",
  mediumPurple: "Tranquility",
  crimson: "Mustache Bash",
  pink: "Candy Crush",
  navy: "Garden Party"
};
const LANGUAGE_OPTIONS = {
  ch: "Chinese",
  it: "Italian",
  en: "English",
  sp: "Spanish",
  fr: "French",
  ge: "German"
};
const INITIAL_USER = JSON.parse(localStorage.getItem("user")) || DEFAULT_USER;

const Settings = () => {
  const [user, setUser] = useState(INITIAL_USER);
  const { t } = useTranslation();

  return (
    <>
      <Banner message={t("welcomeMessage")} />
      <div className="app">
        <Sidebar {...user} />
        <div className="settings">
          <div>
            <h1 className="settings_title">{t("title")}</h1>
            <span className="settings_subtitle">{t("subtitle")}</span>
          </div>
          <main>
            <Form
              user={user}
              setUser={setUser}
              languageOptions={LANGUAGE_OPTIONS}
              themeOptions={THEME_OPTIONS}
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default Settings;

import { memo } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import LogoutIcon from "@mui/icons-material/Logout";
import "./styles.css";

const dateFormat = (date) => moment(date).format("DD/MM/YYYY");

const Sidebar = (DEFAULT_USER) => {
  const {
    CREATION_DATE: creationDate,
    LAST_PAYMENT_DATE: lastPaymentDate,
    user_profile_image: image
  } = DEFAULT_USER;
  const { t } = useTranslation();

  return (
    <div className="sidebar">
      <img src={image} alt="sidebar__image" className="sidebar__image" />
      <ul className="sidebar__list">
        <li className="sidebar__list-item">
          <span> {t("subscriptionTitle")}: </span>
          <span>{t("subscriptionType")}</span>
        </li>
        <li className="sidebar__list-item">
          <span> {t("creationDateTitle")}:</span>{" "}
          <span>{dateFormat(creationDate)}</span>
        </li>
        <li className="sidebar__list-item">
          <span>{t("lastPaymentDateTitle")}:</span>
          <span> {dateFormat(lastPaymentDate)}</span>
        </li>
      </ul>
      <button className="sidebar__button">{t("viewUserProfile")}</button>
      <button className="sidebar__button sidebar__button--link">
        www.barac.com
      </button>
      <button className="sidebar__button sidebar__button--logout">
        <LogoutIcon className="sidebar__logoutIcon" />
      </button>
    </div>
  );
};

export default memo(Sidebar);

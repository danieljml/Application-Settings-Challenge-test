import "./styles.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>Daniel Martinez 2023 © {t("rigthReserved")}</p>
    </footer>
  );
};

export default Footer;

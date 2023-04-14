import { useState } from "react";
import i18n from "../../i18n";

const useLanguage = () => {
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return { language, changeLanguage };
};

export default useLanguage;

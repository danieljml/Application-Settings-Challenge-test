import { useEffect, useState } from "react";

function useBodyBackgroundColor(initialColor) {
  const [bgColor, setBgColor] = useState(initialColor);
  const checkboxs = document.querySelectorAll('input[type="checkbox"]');
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    document.querySelector(".form__btn").style.backgroundColor = bgColor;
    document.querySelector(
      ".sidebar__button--logout"
    ).style.backgroundColor = bgColor;
  }, [bgColor]);

  return [bgColor, setBgColor];
}

export default useBodyBackgroundColor;

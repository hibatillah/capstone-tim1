import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const activeTheme = () =>
    document.documentElement.setAttribute("class", theme);

  useEffect(() => {
    activeTheme();
    console.info({ theme });
  }, [activeTheme, theme]);

  return (
    <div
      onClick={handleTheme}
      className="w-10 h-10 rounded-md bg-white grid place-items-center cursor-pointer select-none active:bg-primary group dark:bg-black-dark dark:active:bg-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="w-5 h-5 fill-grey-dark group-hover:fill-primary group-active:fill-white dark:group-hover:fill-primary-light dark:group-active:fill-white"
      >
        <path
          fill-rule="evenodd"
          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
};

export default DarkMode;
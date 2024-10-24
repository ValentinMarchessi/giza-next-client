"use client";

import Moon from "./Icons/MoonIcon";
import Sun from "./Icons/SunIcon";

export default function ThemeSwitch() {
  return (
    <div className="grid items-center  aspect-square grow">
      <label
        htmlFor="theme-switch"
        className="cursor-pointer bg-white-100 shadow-md dark:bg-black-300 p-2 transition
        rounded-full hover:bg-white-800 dark:hover:bg-black-200"
      >
        <span className="sr-only">Toggle Dark Mode</span>
        <input
          type="checkbox"
          id="theme-switch"
          className="hidden"
          onChange={(e) => {
            console.log(e);
            if (e.target.checked) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          }}
        />
        <Moon />
        <Sun />
      </label>
    </div>
  );
}

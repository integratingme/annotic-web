export const useTheme = () => {
  const toggleTheme = () => {
    const html = document.documentElement;

    html.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      html.classList.contains("dark") ? "dark" : "light",
    );
  };

  const initTheme = () => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return { toggleTheme, initTheme };
};

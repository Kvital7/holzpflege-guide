const root = document.body;
const toggle = document.getElementById("themeToggle");
const storedTheme = window.localStorage.getItem("holzTheme");

if (storedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
  toggle.textContent = "☼";
}

toggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  toggle.textContent = next === "dark" ? "☼" : "☾";
  window.localStorage.setItem("holzTheme", next);
});

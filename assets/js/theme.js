const themeToggle = document.querySelector("#sw-checkbox");

function applyTheme(isLight) {
  document.body.classList.toggle("light-mode", isLight);
  if (themeToggle) themeToggle.checked = isLight;
}

applyTheme(localStorage.getItem("lightMode") === "true");

themeToggle?.addEventListener("change", () => {
  applyTheme(themeToggle.checked);
  localStorage.setItem("lightMode", String(themeToggle.checked));
});

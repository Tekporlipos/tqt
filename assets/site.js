// Theme: saved choice, otherwise dark. Applied before paint via the inline
// snippet in each <head>; this file wires the toggle and the mobile menu.
(function () {
  var KEY = "tqt_theme";
  var root = document.documentElement;
  function current() { return root.getAttribute("data-theme") === "light" ? "light" : "dark"; }
  function label() {
    var b = document.getElementById("theme-btn");
    if (b) b.textContent = current() === "dark" ? "Light" : "Dark";
  }
  document.addEventListener("DOMContentLoaded", function () {
    label();
    var b = document.getElementById("theme-btn");
    if (b) b.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      label();
    });
    var m = document.getElementById("menu-btn"), l = document.getElementById("links");
    if (m && l) m.addEventListener("click", function () { l.classList.toggle("open"); });
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();

// ここからコードを書いてください
export function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');

  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");

  // Home
  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Homeタブがクリックされました！");
    converterSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
  });

  // Converter
  converterTab.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Converterタブがクリックされました！");
    homeSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
  });
}

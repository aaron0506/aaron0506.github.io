(() => {
  const isTraditionalChinese =
    document.documentElement.lang.toLowerCase().startsWith("zh");
  const isExperiencePage = document.body.dataset.page === "experience";
  const params = new URLSearchParams(window.location.search);
  const currentId = params.get("id");

  function refreshLanguageLinks() {
    document.querySelectorAll("[data-language-link]").forEach((link) => {
      const target = link.dataset.target;
      const language = link.dataset.language;
      let destination = target;

      if (isExperiencePage && currentId) {
        destination += `?id=${encodeURIComponent(currentId)}`;
      } else if (!isExperiencePage && window.location.hash) {
        destination += window.location.hash;
      }

      link.href = destination;
      link.textContent = language === "zh" ? "中文" : "English";
    });
  }

  function keepChineseExperienceLinksChinese() {
    if (!isTraditionalChinese) return;

    document
      .querySelectorAll(
        'a[href^="experience.html?id="]:not([data-language-link])',
      )
      .forEach((link) => {
        link.href = link
          .getAttribute("href")
          .replace("experience.html", "experience-zh.html");
      });
  }

  refreshLanguageLinks();

  document.addEventListener("DOMContentLoaded", () => {
    refreshLanguageLinks();
    keepChineseExperienceLinksChinese();
  });

  window.addEventListener("hashchange", refreshLanguageLinks);
})();

const languageButton = document.querySelector(".language-toggle");
const languageOptions = document.querySelectorAll(".language-option");
const translatedElements = document.querySelectorAll("[data-en][data-ja]");
languageButton.hidden = false;

function setLanguage(language) {
  document.documentElement.lang = language;

  translatedElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });

  languageOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.lang === language);
  });

  languageButton.setAttribute(
    "aria-label",
    language === "en" ? "Switch to Japanese" : "英語に切り替える",
  );

  try {
    localStorage.setItem("preferred-language", language);
  } catch {
    // Language switching also works when browser storage is unavailable.
  }
}

languageButton.addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang === "en" ? "ja" : "en";
  setLanguage(nextLanguage);
});

try {
  const storedLanguage = localStorage.getItem("preferred-language");
  if (storedLanguage === "ja" || storedLanguage === "en") {
    setLanguage(storedLanguage);
  }
} catch {
  // Keep the default language when browser storage is unavailable.
}

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("will-reveal");
    revealObserver.observe(element);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

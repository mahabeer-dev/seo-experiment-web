// Main JS for RankRocket Digital sandbox site
// This file wires tracking events, A/B testing, and basic UI behavior.

(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function pushToDataLayer(eventData) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventData);
  }

  function initButtonTracking() {
    var trackedButtons = document.querySelectorAll("[data-track-click]");
    if (!trackedButtons.length) return;

    trackedButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-track-click") || btn.id || "unnamed_button";
        pushToDataLayer({
          event: "button_click",
          button_id: id,
          button_text: btn.textContent.trim(),
          page_title: document.title,
        });
      });
    });
  }

  function initContactFormTracking() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var statusNode = document.getElementById("contact-form-status");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var formData = new FormData(form);
      var service = formData.get("service") || "not_selected";

      pushToDataLayer({
        event: "form_submission",
        form_id: "contact-form",
        form_name: "Contact form",
        service_interest: service,
      });

      if (statusNode) {
        statusNode.textContent =
          "Form submitted in sandbox mode. Event sent to dataLayer for GTM testing.";
        statusNode.className = "form-success";
      }
    });
  }

  function initABTesting() {
    var hero = document.querySelector("[data-ab-experiment='hero-headline']");
    if (!hero) return;

    var titleEl = hero.querySelector("[data-ab-variant='headline']");
    if (!titleEl) return;

    var variant = Math.random() < 0.5 ? "A" : "B";

    if (variant === "A") {
      titleEl.textContent =
        "Rank faster with search-obsessed SEO and experimentation-ready tracking.";
    } else {
      titleEl.textContent =
        "Turn every crawl, click, and conversion into an SEO test you control.";
    }

    pushToDataLayer({
      event: "ab_test_impression",
      experiment: "hero-headline",
      variant: variant,
    });
  }

  function initExperimentNote() {
    var note = document.getElementById("experiment-note");
    if (!note) return;

    note.textContent =
      "This site is intentionally built as an SEO testing sandbox. Feel free to break things, test hypotheses, and compare before/after changes.";
  }

  ready(function () {
    pushToDataLayer({
      event: "seo_sandbox_loaded",
      page_title: document.title,
    });

    initButtonTracking();
    initContactFormTracking();
    initABTesting();
    initExperimentNote();
  });
})();


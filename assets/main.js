/* Bar à Parfum · interactions */
(function () {
  "use strict";

  /* ── Menu mobile ─────────────────────────────────────── */
  var burger = document.querySelector(".burger");
  var nav = document.getElementById("nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.textContent = open ? "Fermer" : "Menu";
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        burger.textContent = "Menu";
      }
    });
  }

  /* ── Header compact au scroll ────────────────────────── */
  var head = document.querySelector(".site-head");
  if (head) {
    window.addEventListener("scroll", function () {
      head.classList.toggle("scrolled", window.scrollY > 12);
    }, { passive: true });
  }

  /* ── Apparition au scroll ────────────────────────────── */
  var risers = document.querySelectorAll(".rise");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    risers.forEach(function (el) { io.observe(el); });
  } else {
    risers.forEach(function (el) { el.classList.add("in"); });
  }

  /* ── Formulaires devis / prestataires ─────────────────
     Pas de backend : la demande part par email pré-rempli.
     Remplacez EMAIL par votre adresse, ou branchez un service
     type Formspree en remplaçant le handler ci-dessous.     */
  var EMAIL = "contact@bara-parfums.fr";

  var form = document.getElementById("form-devis");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var data = new FormData(form);
      var origine = form.getAttribute("data-origine") || "client";
      var lines = [];
      data.forEach(function (value, key) {
        if (String(value).trim() !== "") {
          lines.push(key.replace(/_/g, " ") + " : " + value);
        }
      });

      var subject =
        origine === "prestataire"
          ? "Ouverture de compte revendeur — Bar à Parfum"
          : "Demande de devis — Bar à Parfum";
      var body =
        "Bonjour,\n\nVoici ma demande :\n\n" +
        lines.join("\n") +
        "\n\nMerci !";

      var status = form.querySelector(".status");
      if (status) {
        status.textContent =
          "✦ Votre messagerie va s'ouvrir avec la demande pré-remplie. " +
          "Si rien ne se passe, écrivez-nous à " + EMAIL + ".";
      }

      window.location.href =
        "mailto:" + EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }
})();

// Mobile-Menü öffnen und schliessen
const menuKnopf = document.querySelector(".menu-knopf");
const hauptnav = document.querySelector(".hauptnav");

menuKnopf.addEventListener("click", function () {
  const istOffen = hauptnav.classList.toggle("offen");
  menuKnopf.setAttribute("aria-expanded", istOffen);
});

// Bild vergrössern
const dialog = document.querySelector("#grossbild");

if (dialog) {
  const grossesBild = dialog.querySelector("img");
  const schliessen = dialog.querySelector(".schliessen");
  const knoepfe = document.querySelectorAll(".galerie button");

  knoepfe.forEach(function (knopf) {
    knopf.addEventListener("click", function () {
      const bild = knopf.querySelector("img");
      grossesBild.src = bild.src;
      grossesBild.alt = bild.alt;
      dialog.showModal();
    });
  });

  schliessen.addEventListener("click", function () {
    dialog.close();
  });

  // Klick neben das Bild schliesst es auch
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

// Kontaktformular: Bestätigung anzeigen (es wird nichts versendet)
const formular = document.querySelector(".kontakt-formular");

if (formular) {
  const meldung = formular.querySelector(".meldung");

  formular.addEventListener("submit", function (event) {
    event.preventDefault();
    meldung.textContent =
      "Danke, " +
      formular.elements["name"].value +
      "! Ihre Nachricht ist angekommen.";
    meldung.hidden = false;
    formular.reset();
  });
}

function toggleTheme() {
  document.body.classList.toggle("theme-garage");
  const isGarage = document.body.classList.contains("theme-garage");
  localStorage.setItem("theme", isGarage ? "garage" : "default");
}

// Gespeichertes Theme beim Laden wiederherstellen
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("theme") === "garage") {
    document.body.classList.add("theme-garage");
  }
});

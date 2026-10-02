/* =========================================================
   JEDNODUCHÝ LIGHTBOX (ZVĚTŠENÍ OBRÁZKU PO KLIKNUTÍ)
   Tento soubor NENÍ potřeba upravovat.
   Funguje automaticky pro všechny prvky s třídou "galerie-polozka".
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  var pozadi = document.getElementById("lightbox-pozadi");
  var velkyObrazek = document.getElementById("lightbox-obrazek");
  var popisek = document.getElementById("lightbox-popisek");
  var tlacitkoZavrit = document.getElementById("lightbox-zavrit");

  if (!pozadi) {
    return; // na této stránce lightbox není potřeba
  }

  var polozky = document.querySelectorAll(".galerie-polozka");

  polozky.forEach(function (polozka) {
    polozka.addEventListener("click", function () {
      var obrazek = polozka.querySelector("img");
      var text = polozka.querySelector(".galerie-popisek");

      velkyObrazek.src = obrazek.src;
      velkyObrazek.alt = obrazek.alt;
      popisek.textContent = text ? text.textContent : "";

      pozadi.classList.add("zobrazeno");
    });
  });

  function zavritLightbox() {
    pozadi.classList.remove("zobrazeno");
    velkyObrazek.src = "";
  }

  tlacitkoZavrit.addEventListener("click", zavritLightbox);

  pozadi.addEventListener("click", function (e) {
    if (e.target === pozadi) {
      zavritLightbox();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      zavritLightbox();
    }
  });
});

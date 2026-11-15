// Wurde Mit KI Gemacht
// GitHub Actions secrets are not available in browser JavaScript.
// Set your Discord webhook URL here.
const WEBHOOK_URL = "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageInput");

  if (!form || !nameInput || !emailInput || !messageInput) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Verhindert das Neuladen der Seite

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      alert("Bitte fülle alle Felder aus.");
      return;
    }

    // Nachrichten-Formatierung für Discord (Embed)
    const payload = {
      embeds: [
        {
          title: "📩 Neue Formular-Eingabe",
          color: 3447003, // Blau/Türkis
          fields: [
            {
              name: "👤 Name",
              value: name,
              inline: true,
            },
            {
              name: "📧 E-Mail",
              value: email,
              inline: true,
            },
            {
              name: "💬 Nachricht",
              value: message,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    // Daten per POST-Request an den Discord Webhook senden
    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          alert("Nachricht erfolgreich gesendet!");
          form.reset(); // Formular zurücksetzen
        } else {
          alert("Fehler beim Senden der Nachricht.");
        }
      })
      .catch((error) => {
        console.error("Fehler:", error);
        alert("Fehler beim Verbinden mit Discord.");
      });
  });
});

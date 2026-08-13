document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".visit-contact-form");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      const trap = form.querySelector("name='website'");

      if (trap.value !== "") {
        e.preventDefault();

        return false;
      }

      const message = form.querySelector("textarea[name='message']");

      if (message.value.length > 500) {
        e.preventDefault();

        alert("Message is too long.");

        return false;
      }
    });
  });
});

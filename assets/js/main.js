/*
    Scroll Reveal Animation
*/

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        revealObserver.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// ===============================
// ACTIVE NAV LINK ON SCROLL
// ===============================

const sections = document.querySelectorAll(
  "header[id], section[id], footer[id]"
);

const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
  },

  {
    rootMargin: "-40% 0px -50% 0px",
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

/* ==================================================
            MUSEUM VIDEO MODAL
================================================== */

const videoCards = document.querySelectorAll(".video-card");

const museumVideo = document.getElementById("museumVideo");

const videoModalTitle = document.getElementById("videoModalTitle");

const videoModalElement = document.getElementById("videoModal");

if (videoCards.length && museumVideo && videoModalTitle && videoModalElement) {
  const videoModal = new bootstrap.Modal(videoModalElement);

  videoCards.forEach((card) => {
    card.addEventListener("click", () => {
      const videoId = card.dataset.video;

      const title = card.dataset.title;

      videoModalTitle.textContent = title;

      museumVideo.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

      videoModal.show();
    });
  });

  videoModalElement.addEventListener("hidden.bs.modal", () => {
    museumVideo.src = "";
  });
}

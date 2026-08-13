const videoModal = document.getElementById("videoModal");

const futurePlanVideo = document.getElementById("futurePlanVideo");

const futurePlanVideoSource = document.getElementById("futurePlanVideoSource");

const videoModalLabel = document.getElementById("videoModalLabel");

/*
|--------------------------------------------------------------------------
| OPEN VIDEO
|--------------------------------------------------------------------------
*/

document.querySelectorAll(".future-plan-card").forEach((card) => {
  card.addEventListener("click", () => {
    const videoUrl = card.dataset.video;

    const videoTitle = card.dataset.title;

    if (!videoUrl || videoUrl.startsWith("YOUR-")) {
      return;
    }

    videoModalLabel.textContent = videoTitle;

    futurePlanVideoSource.src = videoUrl;

    futurePlanVideo.load();
  });
});

/*
|--------------------------------------------------------------------------
| PLAY WHEN MODAL OPENS
|--------------------------------------------------------------------------
*/

videoModal.addEventListener("shown.bs.modal", () => {
  futurePlanVideo.play().catch(() => {
    // Autoplay may be blocked by the browser.
  });
});

/*
|--------------------------------------------------------------------------
| STOP VIDEO WHEN MODAL CLOSES
|--------------------------------------------------------------------------
*/

videoModal.addEventListener("hidden.bs.modal", () => {
  futurePlanVideo.pause();

  futurePlanVideo.currentTime = 0;

  futurePlanVideoSource.src = "";

  futurePlanVideo.load();
});

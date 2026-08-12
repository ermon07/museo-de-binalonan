const intro = document.getElementById("museum-intro");
const introVideo = document.getElementById("intro-video");


introVideo.addEventListener("ended", () => {

    intro.classList.add("hide");

    setTimeout(() => {

        intro.remove();

    }, 1200);

});
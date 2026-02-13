/* Fullscreen Image */
const photos = document.querySelectorAll(".photo");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        modal.style.display = "flex";
        modalImg.src = photo.src;

        history.pushState({modalOpen:true}, "");
    });

});

/* Back button closes modal */
window.addEventListener("popstate", () => {
    modal.style.display = "none";
});


/* Floating Hearts Generator */
const heartsContainer = document.querySelector(".hearts");

function createHeart(){

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    heartsContainer.appendChild(heart);

    setTimeout(()=> heart.remove(),6000);
}

setInterval(createHeart,500);


/* Music Control */
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = () => {

    if(music.paused){
        music.play();
        musicBtn.textContent = "⏸ Pause Music";
    }
    else{
        music.pause();
        musicBtn.textContent = "🎵 Play Music";
    }
};

const letterBtn = document.getElementById("openLetter");
const letterModal = document.getElementById("letterModal");

letterBtn.addEventListener("click", () => {

    letterModal.style.display = "flex";
    history.pushState({letterOpen:true}, "");
});

/* Back button closes letter */
window.addEventListener("popstate", () => {

    letterModal.style.display = "none";
});

const videos = document.querySelectorAll(".memory-video");
const videoModal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");

videos.forEach(video => {

    video.addEventListener("click", () => {

        videoModal.style.display = "flex";

        modalVideo.src = video.querySelector("source").src;
        modalVideo.currentTime = 0;
        modalVideo.muted = false;
        modalVideo.play();

        history.pushState({videoOpen:true}, "");
    });

});


/* Back button closes fullscreen video */
window.addEventListener("popstate", () => {

    videoModal.style.display = "none";
    modalVideo.pause();
});


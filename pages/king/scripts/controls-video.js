document.addEventListener('DOMContentLoaded', () => {
    var video = document.getElementById("background-video");
    var btnPlay = document.getElementById("btn-play-pause");
    var btnMute = document.getElementById("btn-mute");
    var opacityInput = document.getElementById("video-opacity");
    var mainCard = document.querySelector(".section-about-me");
    
    var defaultOpacity = parseFloat(
        video.dataset.defaultOpacity || "0.2",
        10,
    );

    function setVideoOpacity(value) {
        var pct = value / 100;
        video.style.opacity = pct;
        if (mainCard) {
            mainCard.style.opacity = Math.max(0.2, 1 - pct);
        }
    }

    btnPlay.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            btnPlay.classList.add("is-playing");
            btnPlay.setAttribute("aria-label", "Pause background video");

        } else {
            video.pause();
            btnPlay.classList.remove("is-playing");
            btnPlay.setAttribute("aria-label", "Play background video");
        }
    });

    btnMute.addEventListener("click", function () {
        if (video.muted) {
            video.muted = false;
            video.removeAttribute("muted");
            video.volume = 1;
            video.play().catch(function () { });
            btnMute.classList.add("is-unmuted");
            btnMute.setAttribute("aria-label", "Mute video");
        } else {
            video.muted = true;
            video.setAttribute("muted", "");
            btnMute.classList.remove("is-unmuted");
            btnMute.setAttribute("aria-label", "Unmute video");
        }
    });

    opacityInput.addEventListener("input", function () {
        setVideoOpacity(parseInt(opacityInput.value, 10));
    });

    var defaultOpacityValue = 20;
    var btnReset = document.getElementById("btn-reset-opacity");
    if (btnReset) {
        btnReset.addEventListener("click", function () {
            opacityInput.value = defaultOpacityValue;
            setVideoOpacity(defaultOpacityValue);
        });
    }

    setVideoOpacity(parseInt(opacityInput.value, 10));
    btnPlay.classList.toggle("is-playing", !video.paused);
    btnMute.classList.toggle("is-unmuted", !video.muted);
    if (!video.muted) {
        video.volume = 1;
    }
})
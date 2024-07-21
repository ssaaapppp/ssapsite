document.getElementById('videoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const videoPlayer = document.getElementById('videoPlayer');
    const fileURL = URL.createObjectURL(file);
    videoPlayer.src = fileURL;
});

const videoPlayer = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteUnmuteBtn = document.getElementById('muteUnmuteBtn');

playPauseBtn.addEventListener('click', function() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        videoPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
});

muteUnmuteBtn.addEventListener('click', function() {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        muteUnmuteBtn.textContent = 'Mute';
    } else {
        videoPlayer.muted = true;
        muteUnmuteBtn.textContent = 'Unmute';
    }
});

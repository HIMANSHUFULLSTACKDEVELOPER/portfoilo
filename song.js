 // JavaScript lister
 document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('playPause');
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
 // JavaScript songes
    const songs = [
      'song1.mp3',
      'song2.mp3',
      'song3.mp3',
      'song4.mp3',
      'song5.mp3'
    ];
    let currentSongIndex = 0;
 // JavaScript pause play  next previsoi
    function playPause() {
      if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
      } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
      }
    }

    function playNext() {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      audio.src = songs[currentSongIndex];
      audio.play();
      playPauseButton.textContent = 'Pause';
    }

    function playPrevious() {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      audio.src = songs[currentSongIndex];
      audio.play();
      playPauseButton.textContent = 'Pause';
    }
 // JavaScript doing the button
    playPauseButton.addEventListener('click', playPause);
    nextButton.addEventListener('click', playNext);
    previousButton.addEventListener('click', playPrevious);
  });
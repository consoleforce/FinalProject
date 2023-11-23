document.addEventListener('DOMContentLoaded', function() {
    var hotelsText = document.getElementById('hotelsText');
    hotelsText.style.transform = 'translateY(0)'; 
  });

  function zoomIn(element) {
    element.style.transform = 'scale(1.1)';
  }

  function zoomOut(element) {
    element.style.transform = 'scale(1)'; 
  }



  document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('myAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const skipForwardBtn = document.getElementById('skipForwardBtn');
    const volumeSlider = document.getElementById('volumeSlider');
  
    playPauseBtn.addEventListener('click', function () {
      if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '&#10074;&#10074;'; // Пауза
      } else {
        audio.pause();
        playPauseBtn.innerHTML = '&#9658;'; // Воспроизведение
      }
    });
  
    skipForwardBtn.addEventListener('click', function () {
      audio.currentTime += 15;
    });
  
    volumeSlider.addEventListener('input', function () {
      audio.volume = volumeSlider.value;
    });
  });

  
  

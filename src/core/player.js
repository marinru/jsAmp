export default class Player
{
    /* global URL */
    
    constructor() {
        this.audio = document.createElement("audio");
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.mediaSource = this.audioContext.createMediaElementSource(this.audio);
        this.mediaSource.connect(this.audioContext.destination);
    }
    
    setAudioSource(source) {
      // Prevents memory leaks
      if (this.audio.src) {
        URL.revokeObjectURL(this.audio.src);
      }
      
      this.audio.src = URL.createObjectURL(source);
    }
    
    play(source) {
        alert("playing...");
        /*
      if (source) {
        this.setAudioSource(source);
      } else if (!this.audio.src) {
        this.setAudioSource(this.playlist.current);
      }

      this.audio.play();
      */
    }
    
    pause() {
        alert("paused");
    }
    
    stop() {
        alert("stopped");
    }
    
    stepBackward() {
        alert("stepBackward");
    }
    
    stepForward() {
        alert("stepForward");
    }
        
    eject() {
        alert("ejected");
    }
}
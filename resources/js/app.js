const dd = console.log;

const App = {
  init() {
    App.hook();
    Timer.init();
  },

  hook() {
    // document.querySelector("")
  }
}

const Timer = {
  init() {

  },

  nowTimerHtml(hour, min, sec) {
    return `
        <h1 class="now_time"><span class="hour">00</span>:<span class="min">00</span>:<span class="sec">00</span></h1>
      `
  },

  leftTimerHtml(hour, min, sec) {
    return `
        <h1 class="left_time"><span class="hour">00</span>:<span class="min">00</span>:<span class="sec">00</span></h1>
      `
  }
}

window.onload = () => App.init();
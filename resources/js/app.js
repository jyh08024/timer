// 디버깅
const dd = console.log;

// 패드
const pad = (num) => num < 10 ? "0" + num : num;

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
    const today = new Date();

    const year = today.getFullYear();
    const month = pad(today.getMonth() + 1);
    const day = pad(today.getDay());

    document.querySelector(".today").innerHTML = `${year}년 ${month}월 ${day}일`;

    setInterval(() => {
      const t = new Date();
      const h = pad(12 - (24 - t.getHours()));
      const m = pad(t.getMinutes());
      const s = pad(t.getSeconds());
      
      Timer.nowTimer(h, m, s);
    }, 1000);
  },

  nowTimer(h, m, s) {
    document.querySelector(".now_time").innerHTML = Timer.nowTimerHtml(h, m, s);
  },

  nowTimerHtml(hour, min, sec) {
    return `
      <h1 class="hour">${hour}</h1>
      <h1 class="min">${min}</h1>
      <h1 class="sec">${sec}</h1>
      `
  },

  leftTimerHtml(hour, min, sec) {
    return `
        <h1 class="left_time time"><span class="hour">00</span>:<span class="min">00</span>:<span class="sec">00</span></h1>
      `
  }
}

window.onload = () => App.init();
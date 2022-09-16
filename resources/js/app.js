// 디버깅
const dd = console.log;

// 패드
const pad = (num) => num < 10 ? "0" + num : num;

const App = {
  init() {
    App.hook();
    Timer.init();

    setTimeout(() => {
      const load = document.querySelector(".load");
      load.style.opacity = 0;
      load.style.pointerEvents = "none";

      document.querySelector(".t_box").style.opacity = 1;
    }, 1500);
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
      Timer.nowTimer();
    }, 1000);
  },

  nowTimer() {
    const t = new Date();
    let h = pad(t.getHours() % 12);
    h = h ?? 12;
    const m = pad(t.getMinutes());
    const s = pad(t.getSeconds());
    const mr = t.getHours() > 12 ? "PM" : "AM";
    document.querySelector(".now_time").innerHTML = Timer.nowTimerHtml(mr, h, m, s);
  },

  nowTimerHtml(mr, hour, min, sec) {
    return `
      <h1 class="meridiem">${mr}</h1>
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
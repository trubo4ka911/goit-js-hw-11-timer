"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start() {
    const expectDay = this.targetDate.getTime();
    console.log(expectDay);
    console.log(this.targetDate);

    const day = document.querySelector(`${this.selector} [data-value="days"]`);
    const hour = document.querySelector(
      `${this.selector} [data-value="hours"]`
    );
    const minute = document.querySelector(
      `${this.selector} [data-value="mins"]`
    );
    const second = document.querySelector(
      `${this.selector} [data-value="secs"]`
    );

    setInterval(() => {
      const currentTime = new Date().getTime();
      const deltaTime = expectDay - currentTime;
      function pad(value) {
        return String(value).padStart(2, "0");
      }
      const days = pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = pad(
        Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60))
      );
      const secs = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));

      day.textContent = days;
      hour.textContent = hours;
      minute.textContent = mins;
      second.textContent = secs;
    }, 1000);
  }
}

const myTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2022"),
});

myTimer.start();

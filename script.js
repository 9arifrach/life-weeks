const birthday = new Date("2010-01-26"); 
const weeksInYear = 52;
const lifeYears = 75;
const totalWeeks = weeksInYear * lifeYears;

const now = new Date();
const msPerDay = 24 * 60 * 60 * 1000;
const msPerWeek = 7 * msPerDay;

const daysPassed = Math.floor((now - birthday) / msPerDay);
const weeksPassed = Math.floor((now - birthday) / msPerWeek);

const grid = document.getElementById("grid");

// วันที่เป้าหมาย: 31 ต.ค. 2026 (ปี 69)
const targetDate = new Date("2026-08-31");

for (let i = 0; i < totalWeeks; i++) {
  const box = document.createElement("div");
  box.classList.add("week");

  const weekDate = new Date(birthday.getTime() + i * msPerWeek);
  const nextWeekDate = new Date(weekDate.getTime() + msPerWeek);

  const dateText = weekDate.toLocaleDateString("en-gb", {
    day: "numeric", month: "short", year: "numeric"
  });

  box.dataset.info = `${dateText} | week ${i + 1}`;

  // 1. ไฮไลต์อดีต/ปัจจุบัน
  if (i < weeksPassed) box.classList.add("past");
  if (i === weeksPassed) box.classList.add("current");

  
  if (targetDate >= weekDate && targetDate < nextWeekDate) {
    box.classList.add("special-event");
    box.dataset.info = ` ${box.dataset.info}`;
  }

  grid.appendChild(box);
}

const percent = ((weeksPassed / totalWeeks) * 100).toFixed(1);
document.getElementById("footer").innerHTML = `
  <div><strong>${daysPassed.toLocaleString()}</strong> days lived</div>
  <div style="font-size: 14px; opacity: 0.7; margin-top: 5px;">${percent}% of your life</div>
`;

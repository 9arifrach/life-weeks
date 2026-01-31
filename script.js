const birthday = new Date("2010-01-26"); // แก้วันเกิด
const weeksInYear = 52;
const lifeYears = 65;
const totalWeeks = weeksInYear * lifeYears;

const now = new Date();
const msPerWeek = 7 * 24 * 60 * 60 * 1000;
const weeksPassed = Math.floor((now - birthday) / msPerWeek);

const grid = document.getElementById("grid");

for (let i = 0; i < totalWeeks; i++) {
  const box = document.createElement("div");
  box.classList.add("week");

  const weekDate = new Date(birthday.getTime() + i * msPerWeek);
  const dateText = weekDate.toLocaleDateString("en-gb", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  box.dataset.info = ` ${dateText} | week ${i + 1} of life`;

  if (i < weeksPassed) box.classList.add("past");
  if (i === weeksPassed) box.classList.add("current");

  grid.appendChild(box);
}

// แสดง % ด้านล่าง
const percent = ((weeksPassed / totalWeeks) * 100).toFixed(1);
document.getElementById("footer").innerText = `${percent}% of your life`;

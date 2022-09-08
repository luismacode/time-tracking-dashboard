import { fetchJson } from "./helpers/fetchJson.js";
import { html } from "./helpers/createHtml.js";
import { createNode } from "./helpers/createNode.js";

const json = await fetchJson();

const dailyData = json.map((item) => {
  const title = item.title;
  const timeframe = item.timeframes.daily;
  return { title, timeframe };
});
const weeklyData = json.map((item) => {
  const title = item.title;
  const timeframe = item.timeframes.weekly;
  return { title, timeframe };
});
const monthlyData = json.map((item) => {
  const title = item.title;
  const timeframe = item.timeframes.monthly;
  return { title, timeframe };
});

const dailyLink = document.getElementById("daily");
const weeklyLink = document.getElementById("weekly");
const monthlyLink = document.getElementById("monthly");

const views = document.getElementById("views");

render(dailyData);

dailyLink.addEventListener("click", (e) => {
  e.preventDefault();
  render(dailyData);
  dailyLink.classList.add("timeframe--active");
  weeklyLink.classList.remove("timeframe--active");
  monthlyLink.classList.remove("timeframe--active");
});
weeklyLink.addEventListener("click", (e) => {
  e.preventDefault();
  render(weeklyData);
  weeklyLink.classList.add("timeframe--active");
  dailyLink.classList.remove("timeframe--active");
  monthlyLink.classList.remove("timeframe--active");
});
monthlyLink.addEventListener("click", (e) => {
  e.preventDefault();
  render(monthlyData);
  monthlyLink.classList.add("timeframe--active");
  dailyLink.classList.remove("timeframe--active");
  weeklyLink.classList.remove("timeframe--active");
});

function render(data) {
  if (views.firstElementChild) {
    views.removeChild(views.firstElementChild);
  }
  const view = document.createElement("div");
  view.className = "view";
  views.appendChild(view);

  data.forEach((item) => {
    const template = html`
      <article
        class="card card--tracking card--bg-${item.title.trim().includes(" ")
          ? item.title.toLowerCase().split(" ").join("-")
          : item.title.toLowerCase()}"
      >
        <div class="card__inner">
          <div class="card__activity">
            <h2 class="card__title">${item.title}</h2>
            <img
              src="images/icon-ellipsis.svg"
              alt="icon-ellipsis"
              width="20px"
              height="5px"
            />
          </div>
          <div class="card__hours">
            <p class="m-0 card__current">${item.timeframe.current}hrs</p>
            <p class="m-0 card__previous">
              Last Week-${item.timeframe.previous}hrs
            </p>
          </div>
        </div>
      </article>
    `(item);
    const node = createNode(template);
    view.appendChild(node);
    return view;
  });
}

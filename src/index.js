import "./style.scss";
import { table } from "./modules/variables";
import { postData, fetchData } from "./modules/api";
import { refresher,addScore } from "./modules/variables";



refresher.onclick = () => {
  table.innerHTML = "";
  fetchData().then((res) => {
    res.result.sort((a, b) =>b.score - a.score).forEach((data) => {
      render(data);
    });
  });
};
const render = (data) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = `${data.user}:${data.score}`;
    tr.appendChild(td);
    table.append(tr);
  };




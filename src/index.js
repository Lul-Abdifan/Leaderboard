import './style.scss';
import { table, refresher, addScore } from './modules/variables';
import { postData, fetchData } from './modules/api';
document.addEventListener('DOMContentLoaded',()=>{
  refresh();
  })
const render = (data) => {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.innerHTML = `${data.user}:${data.score}`;
  tr.appendChild(td);
  table.append(tr);
};
addScore.onsubmit = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const score = e.target.score.value;
  postData({ user: name, score });
  e.target.name.value = '';
  e.target.score.value = '';
};

refresher.onclick = () => {
  refresh();
};
const refresh=()=>{
  table.innerHTML = '';
  fetchData().then((res) => {
    res.result
      .sort((a, b) => b.score - a.score)
      .forEach((data) => {
        render(data);
      });
  });
}

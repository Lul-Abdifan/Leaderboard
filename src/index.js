import "./style.scss";
import { table } from "./modules/variables";
import { postData, fetchData } from "./modules/api";
import { refresher,addScore } from "./modules/variables";

addScore.onsubmit = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const score = e.target.score.value;
  postData({ user: name, score: score });
  e.target.name.value = '';
  e.target.score.value = '';
};






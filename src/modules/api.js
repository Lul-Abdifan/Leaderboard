const gameId = 'qr2y4trdsye2s3';
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameURL = `${baseURL}${gameId}/scores`;

const postData = async (data) => {
  const result = fetch(gameURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
  const res = await result.json();
  return res;
};

const fetchData = async () => {
  const result = await fetch(gameURL, {
    method: 'GET',
  });
  return result.json();
};
export { postData, fetchData };
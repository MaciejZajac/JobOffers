import { api } from "./auth";

export const newOffer = ({ payload, token }) => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/offer/newOffer`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
        Authorization: "bearer " + token
      }
    })
      .then(result => {
        return result.json();
      })
      .then(res => {
        resolve({ offer: res });
      })
      .catch(error => {
        reject(error.response);
      });
  });
};

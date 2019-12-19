import config from "../global/config";
export const api =
  process.env.NODE_ENV === "production" ? config.prodApi : config.localApi;

export const register = user => {
  return new Promise((resolve, reject) => {
    console.log("user", user);
    fetch(`${api}/auth/signup`, {
      method: "POST",
      body: JSON.stringify(user),
      "Content-Type": "application/json"
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        resolve({ user: res });
      })
      .catch(error => {
        console.log("error", error);
        reject(error.response);
      });
    // fetch("/auth")
    // axiosInstance.post("/auth", {

    // })
  });
};

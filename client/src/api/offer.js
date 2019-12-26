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

export const getCompanyProfile = ({ payload }) => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/offer/companyProfile/${payload}`, {
      method: "GET"
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

export const companyProfile = ({ payload, token }) => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/offer/companyProfile`, {
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

// PUBLIC
export const getOffers = () => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/offer/getOffers`, {
      method: "GET"
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

// PRIVATE
export const getPrivateOffers = ({ token }) => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/offer/getPrivateOffers`, {
      method: "GET",
      headers: {
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

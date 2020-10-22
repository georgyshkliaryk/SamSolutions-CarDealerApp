const axios = require("axios").default;

export default class RestService {
  get<T>(url: string, queryParams: object = {}): Promise<T> {
    return fetch(url, { method: "GET" }).then((data) => data.json()) as Promise<
      T
    >;
  }
  post<T>(url: string, body: object, queryParams?: object): Promise<T> {
    return fetch(url, { method: "POST" }).then((data) =>
      data.json()
    ) as Promise<T>;
  }
  put(url: string, body: object, queryParams?: object) {}
  delete(url: string) {}
}

export async function postAd(entry) {
  const response = await fetch(`http://localhost:5000/api/ads`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(entry),
  });
  return response.json();
}
export async function deleteAd(path) {
  fetch(path, {
    method: "DELETE",
  });
}

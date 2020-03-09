const axios = require("axios").default;

export default class RestService {
  get<T>(url: string, queryParams: object = {}): Promise<T> {
    return fetch(url, { method: "GET" })
      .then(data => data.json()) as Promise<T>;
  }
  post<T>(url: string, body: object, queryParams?: object): Promise<T> {
    return fetch(url, { method: "POST" })
    .then(data => data.json()) as Promise<T>;
  }
  put(url: string, body: object, queryParams?: object) {}
  delete(url: string) {}
}
 
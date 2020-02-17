const axios = require("axios").default;

export default class RestService {
  get<T>(url: string, queryParams: object = {}): Promise<T> {
    return fetch(url)
      .then(data => data.json()) as Promise<T>;
  }
  post(url: string, body: object, queryParams?: object) {}
  put(url: string, body: object, queryParams?: object) {}
  delete(url: string) {}
}
 
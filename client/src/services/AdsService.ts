import RestService from "./RestService";
import { IAd } from "../models/IAd";

export default class AdsService {
  constructor(private restService: RestService) {}

  getAllAds(queryParams: IAd): Promise<IAd[]> {
    var url = new URL("http://localhost:5000/api/ads"),
      params = queryParams;
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    let queryUrl = url.toString();
    return this.restService.get<IAd[]>(queryUrl);
  }
  getAddById(id: string) {
    return this.restService.get(`/api/ads/${id}`);
  }
}

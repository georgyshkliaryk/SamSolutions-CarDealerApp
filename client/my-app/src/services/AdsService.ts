import RestService from "./RestService";
import { IAd } from "../models/IAd";

export default class AdsService {
  constructor(private restService: RestService) {}

  getAllAds(queryParams = {}): Promise<IAd[]> {
    return this.restService.get<IAd[]>("/api/ads");
    /* return Promise.resolve([
      {
        title: "Mercedes-Benz CLS AMG (2015)",
        description: "",
        img: ""
      }
    ]); */
    /* <AdCard title="Mercedes-Benz GT (2018)" description={description[1]} img={mercedes2}/>
<AdCard title="BMW M5 F90 (2017)" description={description[2]} img={bmw2}/>
<AdCard title="Audi A5 (2019)" description={description[3]} img={audi1}/>) */
    //return Promise.reject("Not implemented");
  }
}

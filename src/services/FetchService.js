import axios from "axios";

export default class FetchService {
  getItems = () => {
    return axios.get("http://localhost:3003/items");
  };

  getCompanies = () => {
    return axios.get("http://localhost:3004/companies");
  };
}

import axios from "axios";

export default class Service {
  getItems = () => {
    axios.get("http://localhost:3003/items");
  };

  getCompanies = () => {
    axios.get("http://localhost:3004/companies");
  };
}

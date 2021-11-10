import axios from "axios";

export default axios.create({
  baseURL: "http://d1e8-65-32-200-189.ngrok.io", //need to update with new forwarding url from ngrok for each seesion
});

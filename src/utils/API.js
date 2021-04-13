import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=25&nat=us";

function random() {
  return axios.get(BASEURL);
};

export default random;
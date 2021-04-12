import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=25&nat=us";

// const random = {
//   random: function() {
//     return axios.get(BASEURL);
//   }
// }

function random() {
  return axios.get(BASEURL);
};

export default random;
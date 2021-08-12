import axios from "axios";

const fetchData = async (text) => {
   return await axios.get(`https://www.breakingbadapi.com/api/characters?name=${text}`);
}
export {fetchData};
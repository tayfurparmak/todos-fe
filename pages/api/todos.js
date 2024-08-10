import axios from "axios";

const baseUrl = "http://localhost:3001/";

const add = async (data) => {
  return await axios.post(baseUrl + "add", data);
};

const get = async () => {
  const result = await axios.get(baseUrl + "get");
  return result.data
};

const remove = async (id) => {
  return await axios.delete(baseUrl + "remove/" + id);
};

export { add, get, remove };

import axios from "axios";

const callApi = async (path: string) => {
  const baseUrl = "http://172.30.1.9:5000";
  const fullUrl = `${baseUrl}${path}`;
  return axios["get"](fullUrl);
};

export default {
  init: () => callApi("/"),
  goldenCross: () => callApi("/golden"),
  kos: () => callApi("/kos"),
  rise: () => callApi("/rise"),
  search: () => callApi("/search"),
};

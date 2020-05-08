import axios from "axios";
import Env from "./environment";

const callApi = async (path: string) => {
  const baseUrl = Env().apiURL;
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

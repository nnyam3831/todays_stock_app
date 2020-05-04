import { AsyncStorage } from "react-native";

export const register = async (title, link) => {
  try {
    const checkList = await AsyncStorage.getItem("CHECKLIST");
    let data = checkList ? JSON.parse(checkList) : undefined;
    console.log("앙");
    const isExist = data ? data.find((stock) => stock.title === title) : false;
    console.log(data);
    if (isExist) throw Error();
    const newStock = { title: title, link: link };
    data = [...data, newStock];
    console.log("저장 성공 ㅋ");
    return AsyncStorage.setItem("CHECKLIST", data);
  } catch (e) {
    console.log("error");
    console.log(e);
  }
};

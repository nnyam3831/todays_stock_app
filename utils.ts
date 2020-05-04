import { AsyncStorage } from "react-native";

export const register = async (title, link): Promise<boolean> => {
  try {
    const checkList = await AsyncStorage.getItem("CHECKLIST");
    if (checkList) {
      let data = JSON.parse(checkList);
      console.log("check");
      const isExist = data.find((stock) => stock.title === title);
      if (isExist) {
        console.log("이미 등록한 종목입니다.");
        return false;
      }
      const newStock = { title: title, link: link };
      data = [...data, newStock];
      console.log(data);
      await AsyncStorage.setItem("CHECKLIST", JSON.stringify(data));
      return true;
    } else {
      // 초기
      const newStock = { title: title, link: link };
      const data = [newStock];
      await AsyncStorage.setItem("CHECKLIST", JSON.stringify(data));
      console.log("됨?");
      return true;
    }
  } catch (e) {
    console.log("error");
    console.log(e);
    return false;
  }
};

import { AsyncStorage, AppState } from "react-native";

export const register = async (title, link): Promise<boolean> => {
  try {
    const checkList = await AsyncStorage.getItem("CHECKLIST");
    if (checkList) {
      let data = JSON.parse(checkList);
      const isExist = data.find((stock) => stock.title === title);
      if (isExist) {
        console.log("이미 등록한 종목입니다.");
        return false;
      }
      const today = new Date();
      const date = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
      const newStock = { title: title, link: link, date: date, content: "" };
      data = [...data, newStock];

      await AsyncStorage.setItem("CHECKLIST", JSON.stringify(data));
      return true;
    } else {
      // 초기
      const today = new Date();
      console.log(today);
      const date = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
      console.log(date);
      const newStock = { title: title, link: link, date: date, content: "" };
      const data = [newStock];
      await AsyncStorage.setItem("CHECKLIST", JSON.stringify(data));
      return true;
    }
  } catch (e) {
    console.log("error");
    console.log(e);
    return false;
  }
};

export const getCheckList = async (): Promise<any> => {
  const checkList = await AsyncStorage.getItem("CHECKLIST");

  if (!checkList) return;
  return JSON.parse(checkList);
};

export const removeCheckList = async (title: string) => {
  try {
    const checkList = await AsyncStorage.getItem("CHECKLIST");
    let list = JSON.parse(checkList);
    list = list.filter((stock) => stock.title !== title);
    await AsyncStorage.setItem("CHECKLIST", JSON.stringify(list));
  } catch (e) {
    console.log(e);
  }
};

export const randomKey = (): string => {
  return (Math.random() * 10000000).toString();
};

import React, { useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { getGoldenCross } from "../redux/stockSlice";

const Main = () => {
  const goldenCross = useSelector((state: RootState) => state.stockReducer.goldenCross);
  const kos = useSelector((state: RootState) => state.stockReducer.kos);
  const dispatch = useDispatch();
  const test = async () => {
    try {
      dispatch(getGoldenCross());
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    test();
  }, []);
  return (
    <ScrollView>
      {goldenCross?.map((gc: any) => (
        <Text>{gc.title}</Text>
      ))}
    </ScrollView>
  );
};

export default Main;

import { useDispatch } from "react-redux";
import { loadEmployeeList } from "./action";
import { View } from "./view";
import { useEffect } from "react";

const Container = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("testing");
    dispatch(loadEmployeeList());
  }, []);

  return <View />;
};

export default Container;

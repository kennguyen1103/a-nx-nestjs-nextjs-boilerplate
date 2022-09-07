import { useDispatch, useSelector } from "react-redux";
import { loadEmployeeList } from "./action";
import { View } from "./view";
import { useEffect } from "react";

const Container = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEmployeeList());
  }, []);

  const employees = useSelector((state: any) => state.employeeList.data);

  return <View employees={employees} />;
};

export default Container;

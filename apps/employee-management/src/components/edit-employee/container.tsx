import { useDispatch, useSelector } from "react-redux";
import { View } from "./view";
import { useEffect } from "react";
import { getEmployeeDetail } from "../employee-list/action";
import { useRouter } from "next/router";

const Container = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      dispatch(getEmployeeDetail(id));
    }
  }, [id]);

  const employee = useSelector((state: any) => state.employeeList.detail);

  return <View employee={employee} />;
};

export default Container;

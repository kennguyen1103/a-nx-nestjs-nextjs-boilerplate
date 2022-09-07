import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { TextField, Container, Button, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { addEmployee } from "../employee-list/action";

export const propsForFormik = (formik: FormikProps<any>, name: string, label: string) => {
  const { values, errors, touched, handleBlur, handleChange } = formik;

  const error: any = touched[name] && errors[name];
  return {
    id: `form-${name}`,
    "data-testid": `input-${name}-testid`,
    name,
    label: label ?? name.charAt(0).toUpperCase() + name.slice(1),
    value: values[name],
    onBlur: handleBlur,
    onChange: handleChange,
    error,
    helperText: error,
  };
};

const AddNewEmployee = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      number: "",
      gender: "M",
    },
    onSubmit: async (values) => {
      dispatch(addEmployee(values));
    },
    validationSchema: Yup.object().shape({
      first_name: Yup.string()
        .trim()
        .min(6, "Min length is 6")
        .max(10, "Max length is 10")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .required("Required"),
      last_name: Yup.string()
        .trim()
        .min(6, "Min length is 6")
        .max(10, "Max length is 10")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .required("Required"),
      email: Yup.string().email("Invalid email address").trim().lowercase().required("Required"),
      gender: Yup.string().oneOf(["M", "F"]).required("Required"),
      number: Yup.string().phone("LK").required("Required"),
    }),
  });

  const defaultTextFieldStyle = { marginBottom: 4 };

  return (
    <Container sx={{ margin: 8 }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField sx={defaultTextFieldStyle} fullWidth {...propsForFormik(formik, "first_name", "First Name")} />
        <TextField sx={defaultTextFieldStyle} fullWidth {...propsForFormik(formik, "last_name", "Last Name")} />
        <TextField sx={defaultTextFieldStyle} fullWidth {...propsForFormik(formik, "email", "Email")} />
        <TextField sx={defaultTextFieldStyle} fullWidth {...propsForFormik(formik, "number", "Phone")} />
        <TextField sx={defaultTextFieldStyle} fullWidth {...propsForFormik(formik, "gender", "Gender")} select>
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="F">F</MenuItem>
        </TextField>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddNewEmployee;

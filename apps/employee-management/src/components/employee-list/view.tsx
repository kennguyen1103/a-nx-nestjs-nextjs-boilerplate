import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { deleteEmployee } from "./action";

export const View = ({ employees }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClickDeleteEmployee = (id) => {
    if (confirm("Press a button!")) {
      dispatch(deleteEmployee(id));
    }
  };
  const handleClickAddNewEmployee = () => {
    router.push("/employee/add");
  };
  const handleClickEditEmployee = (id) => {
    router.push(`/employee/edit/${id}`);
  };

  return (
    <>
      <Button onClick={handleClickAddNewEmployee}>Add new employee</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((row) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>
                  <Button onClick={() => handleClickEditEmployee(row.id)}>Edit</Button>
                  <Button onClick={() => handleClickDeleteEmployee(row.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

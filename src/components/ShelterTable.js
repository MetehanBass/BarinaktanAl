import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteShelter } from "../redux/feature/shelterSlice";
import { EditButton, MyDeleteOutline } from "./StyledElements";
import { toast } from "react-toastify";

const ShelterTable = ({ _id, name, city, email, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Bu barınağı silmek istediğinizden emin misiniz?")) {
      dispatch(deleteShelter({ id, toast }));
    }
  };
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="left">{city}</TableCell>
      <TableCell align="left">{phone}</TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell>
        <Link to={`/new_shelter/${_id}`}>
          <EditButton primary>Düzenle</EditButton>
        </Link>
        <MyDeleteOutline onClick={() => handleDelete(_id)} />
      </TableCell>
    </TableRow>
  );
};

export default ShelterTable;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { getShelters, deleteShelter } from "../../redux/feature/shelterSlice";
import { TheList, EditButton, MyDeleteOutline } from "../StyledElements";
import { DataGrid } from "@material-ui/data-grid";
import ScreenLoader from "../Loader/ScreenLoader";

const ShelterList = () => {
  const { shelters, loading } = useSelector((state) => ({ ...state.shelter }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShelters());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Bu hayvanı silmek istediğinizden emin misiniz?")) {
      dispatch(deleteShelter({ id, toast }));
    }
  };

  const columns = [
    {
      field: "name",
      headerName: "Barınak İsmi",
      width: 500,
    },
    { field: "city", headerName: "Şehir", width: 200 },
    {
      field: "phone",
      headerName: "Telefon Numarası",
      width: 320,
    },
    {
      field: "email",
      headerName: "E-Posta",
      width: 305,
    },
    {
      field: "address",
      headerName: "İlçe",
      width: 150,
    },
  ];

  return (
    <>
      <div
        className="home-container"
        style={{
          display: "flex ",
          height: "800px",
          maxWidth: "1500px",
          marginLeft: "10%",
        }}
      >
        <TheList>
          {loading ? (
            <ScreenLoader />
          ) : (
            <DataGrid
              rows={shelters}
              getRowId={(row) => row._id}
              disableSelectionOnClick
              columns={columns}
              pageSize={10}
            />
          )}
        </TheList>
      </div>
    </>
  );
};

export default ShelterList;

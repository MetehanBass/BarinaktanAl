import React, { useEffect } from "react";
import Sidebar from "../components/AdminSidebar";
import Navbar from "../components/AdminNavbar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { getShelters, deleteShelter } from "../redux/feature/shelterSlice";
import {
  TheList,
  EditButton,
  MyDeleteOutline,
} from "../components/StyledElements";
import { DataGrid } from "@material-ui/data-grid";
import ScreenLoader from "../components/Loader/ScreenLoader";

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

  console.log(shelters);

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
      field: "action",
      headerName: "Eylemler",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/new_shelter/" + params.row._id}>
              <EditButton primary>Düzenle</EditButton>
            </Link>

            <MyDeleteOutline onClick={() => handleDelete(params.row._id)} />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Navbar />
      <div className="home-container" style={{ display: "flex " }}>
        <Sidebar />

        <TheList>
          {loading ? (
            <ScreenLoader />
          ) : (
            <DataGrid
              rows={shelters}
              getRowId={(row) => row._id}
              disableSelectionOnClick
              columns={columns}
              pageSize={15}
            />
          )}
        </TheList>
      </div>
    </>
  );
};

export default ShelterList;

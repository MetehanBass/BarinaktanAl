import React, { useEffect } from "react";
import Sidebar from "../components/AdminSidebar";
import Navbar from "../components/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  TheList,
  EditButton,
  MyDeleteOutline,
} from "../components/StyledElements";
import { getPets, deletePet } from "../redux/feature/petSlice";
import ScreenLoader from "../components/Loader/ScreenLoader";

const PetList = () => {
  const { pets, loading } = useSelector((state) => ({ ...state.pet }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPets());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Bu hayvanı silmek istediğinizden emin misiniz?")) {
      dispatch(deletePet({ id, toast }));
    }
  };

  const columns = [
    {
      field: "name",
      headerName: "İsim",
      width: 250,
    },
    { field: "shelter", headerName: "Barınak", width: 400 },
    {
      field: "age",
      headerName: "Yaş",
      width: 120,
    },
    {
      field: "petId",
      headerName: "Pet Kodu",
      width: 145,
    },
    {
      field: "type",
      headerName: "Tür",
      width: 120,
    },

    {
      field: "breed",
      headerName: "Cins",
      width: 170,
    },
    {
      field: "action",
      headerName: "Eylemler",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/new_pet/" + params.row._id}>
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
              rows={pets}
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

export default PetList;

import React, { useEffect } from "react";
import Sidebar from "../components/AdminSidebar";
import Navbar from "../components/AdminNavbar";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getDonates, deleteDonate } from "../redux/feature/donateSlice";
import { TheList, MyDeleteOutline } from "../components/StyledElements";
import { DataGrid } from "@material-ui/data-grid";
import ScreenLoader from "../components/Loader/ScreenLoader";

const DonateList = () => {
  const { donates, loading } = useSelector((state) => ({ ...state.donate }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDonates());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Bu bağışı silmek istediğinizden emin misiniz?")) {
      dispatch(deleteDonate({ id, toast }));
    }
  };

  console.log(donates);

  const columns = [
    {
      field: "donaterName",
      headerName: "Bağışçı İsmi",
      width: 300,
    },
    { field: "createdAt", headerName: "Tarih", width: 200 },
    {
      field: "totalPrice",
      headerName: "Miktar (₺)",
      width: 150,
    },
    {
      field: "donaterPhone",
      headerName: "Telefon Numarası",
      width: 255,
    },
    {
      field: "donaterEmail",
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
              rows={donates}
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

export default DonateList;

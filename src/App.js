import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./views/index";
import DonateCards from "./views/donateCards";
import Donate from "./views/donate";
import DonateConfirm from "./views/donateConfirm";
import Adoption from "./views/adoption";
import AdoptionDetails from "./views/adoptionDetails";
import AdminHome from "./views/admin";
import AdminLogin from "./views/adminLogin";
import PetList from "./views/petlist";
import ShelterList from "./views/shelterlist";
import DonateList from "./views/donatelist";
import NewPet from "./views/newpet";
import NewShelter from "./views/newshelter";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/feature/authSlice";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./views/NotFound";
import Shelters from "./views/shelters";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(user);
  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/sahiplen/search" element={<Adoption />} exact />
          <Route path="/sahiplen" element={<Adoption />} exact />
          <Route path="/barinaklar" element={<Shelters />} exact />
          <Route
            path="/sahiplen_detay/:id"
            element={<AdoptionDetails />}
            exact
          />
          <Route path="/bagis" element={<DonateCards />} exact />
          <Route path="/bagis_yap" element={<Donate />} exact />
          <Route path="/bagis_tamamla" element={<DonateConfirm />} exact />

          <Route path="/admin" element={<AdminLogin />} exact />
          <Route
            path="/admin_dashboard"
            element={
              <PrivateRoute>
                <AdminHome />
              </PrivateRoute>
            }
            exact
          />
          <Route
            path="/pet_list"
            element={
              <PrivateRoute>
                <PetList />
              </PrivateRoute>
            }
            exact
          />
          <Route
            path="/shelter_list"
            element={
              <PrivateRoute>
                <ShelterList />
              </PrivateRoute>
            }
            exact
          />
          <Route
            path="/donate_list"
            element={
              <PrivateRoute>
                <DonateList />
              </PrivateRoute>
            }
            exact
          />

          <Route
            path="/new_pet"
            element={
              <PrivateRoute>
                <NewPet />
              </PrivateRoute>
            }
            exact
          />
          <Route
            path="/new_pet/:id"
            element={
              <PrivateRoute>
                <NewPet />
              </PrivateRoute>
            }
            exact
          />
          <Route
            path="/new_shelter"
            element={
              <PrivateRoute>
                <NewShelter />
              </PrivateRoute>
            }
            exact
          />
          <Route
            path="/new_shelter/:id"
            element={
              <PrivateRoute>
                <NewShelter />
              </PrivateRoute>
            }
            exact
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

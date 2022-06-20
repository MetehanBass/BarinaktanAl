import axios from "axios";

//API
const API = axios.create({ baseURL: "http://localhost:5000/" });

//Admin
export const signIn = (formData) => API.post("/users/signin", formData);

// Shelter
export const createShelter = (shelterData) => API.post("/shelter", shelterData);
export const getShelters = () => API.get("/shelter");
export const getShelter = (id) => API.get(`/shelter/${id}`);

export const deleteShelter = (id) => API.delete(`/shelter/${id}`);
export const updateShelter = (updatedShelterData, id) =>
  API.patch(`/shelter/${id}`, updatedShelterData);

//Pet
export const createPet = (petData) => API.post("/pet", petData);
export const getPets = () => API.get("/pet");
export const getPet = (id) => API.get(`/pet/${id}`);
export const deletePet = (id) => API.delete(`/pet/${id}`);
export const updatePet = (updatedPetData, id) =>
  API.patch(`/pet/${id}`, updatedPetData);

//Donate
export const createDonate = (donateData) => API.post("/donate", donateData);
export const getDonates = () => API.get("/donate");
export const getDonate = (id) => API.get(`/donate/${id}`);
export const deleteDonate = (id) => API.delete(`/donate/${id}`);

export const getPetsBySearch = (searchQuery) =>
  API.get(`/pet/pet-search?searchQuery=${searchQuery}`);

export const getPetsByShelter = (shelterName) =>
  API.get(`pet/pets-by-shelter/${shelterName}`);

export const checkPetByPetId = (petId) => API.get(`pet/pet-check/${petId}`);

export const getPetsByPagination = (count, page, shelter) => {
  return API.get(
    shelter
      ? `pet/pet/pagination?page=${page}&count=${count}&shelter=${shelter}`
      : `pet/pet/pagination?page=${page}&count=${count}`
  );
};

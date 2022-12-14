import axios from 'axios';

export const URL = 'https://calm-mesa-77347.herokuapp.com';

export const login = async (params) => axios({
  method: 'post',
  url: `${URL}/sessions`,
  data: {
    email: params.email,
    password: params.password,
  },
  withCredentials: true,
});

export const signUp = async (params) => axios({
  method: 'post',
  url: `${URL}/registrations`,
  data: {
    name: params.name,
    email: params.email,
    password: params.password,
  },
  withCredentials: true,
});

export const checkLogin = async () => axios({
  method: 'get',
  url: `${URL}/logged_in`,
  headers: {
    Authorization: `Bearer ${JSON.parse(JSON.parse(localStorage['persist:session']).session).token}`,
  },
});

export const getClasses = async () => axios({
  method: 'get',
  url: `${URL}/groups`,
});

export const getClassDetails = async (id) => axios({
  method: 'get',
  url: `${URL}/groups/${id}`,
});

export const getReservation = async () => axios({
  method: 'get',
  url: `${URL}/reservations`,
  headers: {
    Authorization: `Bearer ${JSON.parse(JSON.parse(localStorage['persist:session']).session).token}`,
  },
});

export const deleteReservation = async (id) => axios({
  method: 'delete',
  url: `${URL}/reservations/${id}`,
  headers: {
    Authorization: `Bearer ${JSON.parse(JSON.parse(localStorage['persist:session']).session).token}`,
  },
});

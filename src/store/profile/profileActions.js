import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { PROFILE_API } from "../../helpers/consts";

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async () => {
    let res = await axios.get(PROFILE_API);
    return res;
  }
)


export const createProfile = createAsyncThunk(
  'profile/createProfile',
  async (newProfileObj, { dispatch }) => {
    await axios.post(PROFILE_API, newProfileObj);
    dispatch(getProfile());
  }
)

export const getOneProfile = createAsyncThunk(
  'profile/getOneProfile',
  async (id) => {
    let res = await axios.get(`${PROFILE_API}/${id}`);
    return res;
  }
)

export const editProfile = createAsyncThunk(
  'profile/editProfile',
  async ( editedObj, { dispatch }) => {
    let res = await axios.patch(`${PROFILE_API}/${editedObj.id}`, editedObj);
    console.log(editedObj); 
    dispatch(getProfile());
    return res;
  }
)
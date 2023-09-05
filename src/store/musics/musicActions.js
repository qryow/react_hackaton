import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { MUSICS_API } from "../../helpers/consts";

export const getMusics = createAsyncThunk(
  'musics/getMusics',
  async (search) => {
    const res = await axios.get(`${MUSICS_API}?search=${search}`);
    console.log(res);
    return res; 
  }
)

export const createMusic = createAsyncThunk(
  'musics/createMusic',
  async (newProductObj, { dispatch }) => {
    await axios.post(MUSICS_API, newProductObj);
    dispatch(getMusics);
  }
)
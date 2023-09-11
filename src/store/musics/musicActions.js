import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { MUSICS_API } from "../../helpers/consts";

export const getMusics = createAsyncThunk(
  'musics/getMusics',
  async (_, { getState }) => {
    const { search } = getState().musics;
    const res = await axios.get(`${MUSICS_API}?q=${search}`);
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

export const deleteMusic = createAsyncThunk(
  'musics/deleteMusic',
  async ({ id }, {dispatch}) => {
    await axios.delete(`${MUSICS_API}/${id}`)
    dispatch(getMusics())
  }
)

export const editMusic = createAsyncThunk(
  'profile/editMusic',
  async ( editedObj ) => {
    const updatedMusic = { ...editedObj };
    console.log(updatedMusic)
    const res = await axios.patch(`${MUSICS_API}/${editedObj.id}`, updatedMusic);
    return res.data;
  }
)
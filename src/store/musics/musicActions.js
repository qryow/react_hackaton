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
  async (newMusicObj, { dispatch }) => {
    await axios.post(MUSICS_API, newMusicObj);
    dispatch(getMusics);
  }
)

export const deleteMusic = createAsyncThunk(
  'musics/deleteMusic',
  async ({ id }, { dispatch }) => {
    await axios.delete(`${MUSICS_API}/${id}`);
    dispatch(getMusics());
  }
);

export const editMusic = createAsyncThunk(
  "musics/editMusic",
  async (editedObj, { dispatch }) => {
    let res = await axios.patch(`${MUSICS_API}/${editedObj.id}`, editedObj);
    dispatch(getMusics());
    return res;
  }
);

export const getOneMusic = createAsyncThunk(
  "musics/getOneMusic",
  async ({ id }) => {
    let res = await axios.get(`${MUSICS_API}/${id}`);
    console.log(id);
    return res;
  }
);
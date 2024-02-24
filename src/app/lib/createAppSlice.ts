import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

// `buildCreateSlice` позволяет нам создавать срез с асинхронными thunks.
//Thunks: это функции, которые вы можете передавать в dispatch для выполнения
 //асинхронных операций, таких как загрузка данных с сервера.
 // Thunks позволяют вам писать более сложную логику, чем простые синхронные action creators.
export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

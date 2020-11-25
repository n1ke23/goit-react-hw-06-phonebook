import { createAction } from '@reduxjs/toolkit';
import { ADD_CONTACT, REMOVE_CONTACT, FILTER_VALUE, FILTER_ARR, REMOVE_FILTER_ARR, NOTIFY, ADD_LOCAL_SOR } from './../const/const'


export const addContat = createAction(ADD_CONTACT);// добавить
export const deleteContact = createAction(REMOVE_CONTACT);// удалить
export const setIsNotify = createAction(NOTIFY);// алерт на задвоение
export const filterValue = createAction(FILTER_VALUE);// добавить фильтр
export const filterArr = createAction(FILTER_ARR);// массив фильтров

export const removeFilterArr = createAction(REMOVE_FILTER_ARR);

export const addLocalStor = createAction(ADD_LOCAL_SOR)
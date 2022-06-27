import { createAction } from "redux-actions";

export const ADD_TODO = createAction("ADD_TODO");
export const DELETE_TODO = createAction("DELETE_TODO");
export const FULFILL_TODO = createAction("FULFILL_TODO");

export const EDIT_TODO = createAction("EDIT_TODO");
export const REMOVE_TODO = createAction("REMOVE_TODO");
export const CHANGE_TODO = createAction("CHANGE_TODO");

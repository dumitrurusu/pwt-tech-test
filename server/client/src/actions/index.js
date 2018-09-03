import axios from "axios";
import { FETCH_USER, FETCH_TICKETS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitTicket = (values, history) => async dispatch => {
  const res = await axios.post("/api/tickets", values);

  history.push("/tickets");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTickets = () => async dispatch => {
  const res = await axios.get("/api/tickets");

  dispatch({ type: FETCH_TICKETS, payload: res.data });
};

export const deleteTicket = value => async dispatch => {
  console.log("DELETING FROM ACTION", { id: value });

  const res = await axios.delete("/api/tickets", { params: { id: value } });
  dispatch({ type: FETCH_TICKETS, payload: res.data });
};

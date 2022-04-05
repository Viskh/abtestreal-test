const initialState = {
  dates: [],
};

export const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "date/load/fulfilled":
      return {
        ...state,
        dates: action.payload,
      };

    case "date/create/fulfilled":
      return {
        ...state,
        dates: [...state.dates, action.payload],
      };

    case "date/delete/fulfilled":
      return {
        ...state,
        dates: state.dates.filter(item => item._id !== action.payload),
      };

    default:
      return state;
  }
};

export const getDate = () => {
  return async (dispatch) => {
    dispatch({ type: "date/load/pending" });
    try {
      const res = await fetch("http://localhost:4000/dates");
      const data = await res.json();

      dispatch({ type: "date/load/fulfilled", payload: data });
    } catch (error) {
      dispatch({ type: "date/load/rejected", payload: error });
    }
  };
};

export const postDate = (dateReg, dateVisit) => {
  return async (dispatch) => {
    dispatch({ type: "date/create/pending" });
    try {
      const res = await fetch("http://localhost:4000/add/dates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          registration: dateReg,
          lastVisit: dateVisit,
        }),
      });
      const data = await res.json();
      dispatch({ type: "date/create/fulfilled", payload: data });
    } catch (error) {
      dispatch({ type: "date/create/rejected", payload: error });
    }
  };
};

export const deleteDate = (id) => {
  return async (dispatch) => {
    dispatch({ type: "date/delete/pending" });
    try {
      await fetch(`http://localhost:4000/delete/date/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "date/delete/fulfilled", payload: id });
    } catch (error) {
      dispatch({ type: "date/delete/rejected", payload: error });
    }
  };
};

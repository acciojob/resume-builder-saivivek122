import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "./resumeSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.resume.currentPage);

  return (
    <div>
      {currentPage > 1 && <button onClick={() => dispatch(prevPage())}>Back</button>}
      {currentPage < 6 && <button onClick={() => dispatch(nextPage())}>Next</button>}
    </div>
  );
};

export default Navigation;

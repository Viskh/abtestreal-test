import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postDate } from '../../redux/date';
import styles from "./main.module.css";

const Form = () => {

  const dispatch = useDispatch()

  const [dateReg, setDateReg] = useState("");
  const [dateVisit, setDateVisit] = useState("");

  const handleInputReg = (e) => {
    setDateReg(e.target.value);
  };

  const handleInputVisit = (e) => {
    setDateVisit(e.target.value);
  };

  const handleCreateDate = () => {
    if (dateReg && dateVisit) {
      dispatch(postDate(dateReg, dateVisit));
      setDateReg("");
      setDateVisit("");
    }
  };

  return (
    <div className={styles.main__content__form}>
    <input
      value={dateReg}
      type="date"
      onChange={(e) => handleInputReg(e)}
    />
    <input
      value={dateVisit}
      type="date"
      onChange={(e) => handleInputVisit(e)}
    />
    <button onClick={handleCreateDate}>add new date</button>
  </div>

  );
};

export default Form;
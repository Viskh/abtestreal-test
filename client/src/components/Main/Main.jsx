import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../redux/date";
import styles from "./main.module.css";

import BarGraph from "../BarGraph";
import Table from "./Table";
import Form from "./Form";

const Main = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const dates = useSelector((state) => state.dates);

  const returnedUsers = dates.filter((item) => {
    const lastVisit = new Date(item.lastVisit);
    const registration = new Date(item.registration);
    const difference = lastVisit.getTime() - registration.getTime();

    if (difference / (1000 * 3600 * 24) >= 7) {
      return difference;
    }
    return null
  });

  const registeredUsers = dates.filter((item) => {
    const today = new Date().getTime();
    const registration = new Date(item.registration);
    const difference = today - registration.getTime();
    if (difference / (1000 * 3600 * 24) > 7) {
      return difference;
    }
    return null
  });

  const calc = Math.round(
    (returnedUsers.length / registeredUsers.length) * 100
  );

  const handleCalculate = () => {
    setOpen(true);
  };

  useEffect(() => {
    dispatch(getDate());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      
      <div className={styles.main__content}>
        <Form />
        {dates.length ? (
          <>
            <Table dates={dates} />

            <button
              onClick={() => handleCalculate()}
              className={styles.calculate__btn}
            >
              Calculate
            </button>

            {open && (
              <div className={styles.bar__graph}>
                <div className={styles.rolling}>
                  Rolling Retention 7 day: {calc} %
                </div>
                <BarGraph dates={dates} />
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Main;

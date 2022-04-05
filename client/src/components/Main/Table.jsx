import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cart from "../../assets/cart.svg";
import { deleteDate } from "../../redux/date";
import styles from "./main.module.css";

const Table = () => {
  const dispatch = useDispatch();

  const dates = useSelector((state) => state.dates);

  const handleDeleteDate = (id) => {
    dispatch(deleteDate(id));
  };

  return (
    <div className={styles.main__content__table}>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Date Registration</th>
            <th>Date Last Activity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dates.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.registration}</td>
                <td>{item.lastVisit}</td>
                <td>
                  <img
                    className={styles.table__delete__btn}
                    onClick={() => handleDeleteDate(item._id)}
                    src={cart}
                    alt=""
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

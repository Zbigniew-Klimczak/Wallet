import css from "./Select.module.css";
import ArrowGround from "../../SVG/ArrowGround";
import { useState } from "react";
import PropTypes from "prop-types";

const Select = ({ setYear, year, setMonth, month }) => {
  const [isOpened, setIsOpened] = useState(true);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const number = +month;
  return (
    <div className={css.select} onClick={() => setIsOpened(!isOpened)}>
      <p>{setYear ? year : months[number - 1]}</p>
      <ArrowGround />
      <div
        className={
          isOpened ? `${css.select__list}` : `${css.select__listActive}`
        }
      >
        {setYear
          ? [2021, 2022, 2023, 2024, 2025].map((year) => (
              <p
                className={css.select__listItem}
                key={year}
                onClick={() => setYear(year)}
              >
                {year}
              </p>
            ))
          : months.map((month, index) => (
              <p
                className={css.select__listItem}
                key={month}
                onClick={() =>
                  setMonth(index + 1 < 10 ? `0${index + 1}` : index + 1)
                }
              >
                {month}
              </p>
            ))}
      </div>
    </div>
  );
};

Select.propTypes = {
  setYear: PropTypes.func,
  year: PropTypes.number,
  setMonth: PropTypes.func,
};

export default Select;

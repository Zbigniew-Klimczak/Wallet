import css from "./homeAndStatisticForm.module.css";
import Home from "../../images/home.png";
import Statistics from "../../images/statistics.png";
import ChartDoughnut from "../Chart/Chart";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavLink = styled(NavLink)`
  &.active {
    font-family: "Poppins-Bold";
  }
`;

function App() {
  const data = {
    labels: [
      "Income",
      "Main expenses",
      "Products",
      "Car",
      "Self care",
      "Child care",
      "Household products",
      "Education",
      "Leisure",
      "Other expenses",
      "Entertainment",
    ],
  };
  const colors = [
    "#FED057",
    "#FFD8D0",
    "#FD9498",
    "#C5BAFF",
    "#6E78E8",
    "#4A56E2",
    "#81E1FF",
    "#24CCA7",
    "#00AD84",
    "#784fca",
  ];

  const expense = 0;

  return (
    <div className={css.container}>
      <StyledNavLink to="/home" className={css.buttonContainer}>
        <img className={css.image} src={Home} alt="icon" />
        <button className={css["home-button"]}>Home</button>
      </StyledNavLink>
      <StyledNavLink to="/diagram" className={css.buttonContainer}>
        <img className={css.image} src={Statistics} alt="icon" />
        <button className={css["statistics-button"]}>Statistics</button>
      </StyledNavLink>
    </div>
  );
}

export default App;

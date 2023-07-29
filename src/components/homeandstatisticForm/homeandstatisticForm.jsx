import css from "./homeAndStatisticForm.module.css";
import Home from "../../images/home.png";
import Statistics from "../../images/statistics.png";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavLink = styled(NavLink)`
  &.active {
    font-family: "Poppins-Bold";
  }
`;

function homeAndStatisticForm() {
  return (
    <div className={css.container}>
      <StyledNavLink to="/home" end className={css.buttonContainer}>
        <img className={css.image} src={Home} alt="icon" />
        <button className={css["home-button"]}>Home</button>
      </StyledNavLink>
      <StyledNavLink to="/home/statistics" className={css.buttonContainer}>
        <img className={css.image} src={Statistics} alt="icon" />
        <button className={css["statistics-button"]}>Statistics</button>
      </StyledNavLink>
    </div>
  );
}

export default homeAndStatisticForm;

import css from "./homeAndStatisticForm.module.css";
import Home from "../../images/homemobile.png";
import Statistics from "../../images/statisticmobile.png";
import Exchange from "../../images/exchange.png";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavLink = styled(NavLink)`
  &.active {
    font-family: "Poppins-Bold";
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
`;

function homeAndStatisticForm() {
  const isMobileView = window.innerWidth > 766;

  return (
    <div className={css.container}>
      <div className={css.buttonWrapper}>
        <StyledNavLink to="/home" end className={css.buttonContainer}>
          <img className={css.image} src={Home} alt="Home icon" />
          <button className={css["home-button"]}>Home</button>
        </StyledNavLink>
        <StyledNavLink to="/home/statistics" className={css.buttonContainer}>
          <img className={css.image} src={Statistics} alt="Statistics icon" />
          <button className={css["statistics-button"]}>Statistics</button>
        </StyledNavLink>
        {!isMobileView && (
          <StyledNavLink to="/home/exchange" className={css.buttonContainer}>
            <img className={css.image} src={Exchange} alt="Exchange icon" />
          </StyledNavLink>
        )}
      </div>
    </div>
  );
}

export default homeAndStatisticForm;

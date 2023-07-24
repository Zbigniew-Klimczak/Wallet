import css from './homeandstatisticForm.module.css';
import Home from '../../images/home.png';
import Statistics from '../../images/statistics.png';

function App() {
  return (
    <div className={css.container}>
      <div className={css.buttonContainer}>
        <img className={css.image} src={Home} alt="icon" />
        <button className={css['home-button']}>Home</button>
      </div>
      <div className={css.buttonContainer}>
        <img className={css.image} src={Statistics} alt="icon" />
        <button className={css['statistics-button']}>Statistics</button>
      </div>
    </div>
  );
}

export default App;
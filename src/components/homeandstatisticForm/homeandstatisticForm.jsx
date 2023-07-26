import css from './homeAndStatisticForm.module.css';
import Home from '../../images/home.png';
import Statistics from '../../images/statistics.png';
import ChartDoughnut from '../Chart/Chart';

function App() {
	const categories = [1, 2, 3, 4, 5, 6, 7, 8]; 


	const colors = [
		'#FED057',
		'#FFD8D0',
		'#FD9498',
		'#C5BAFF',
		'#6E78E8',
		'#4A56E2',
		'#81E1FF',
		'#24CCA7',
		'#00AD84',
		'#784fca',
	];

	const expense = 0; 

	return (
		<div className={css.container}>
			<div className={css.buttonContainer}>
				<img
					className={css.image}
					src={Home}
					alt='icon'
				/>
				<button className={css['home-button']}>Home</button>
			</div>
			<div className={css.buttonContainer}>
				<img
					className={css.image}
					src={Statistics}
					alt='icon'
				/>
				<button className={css['statistics-button']}>Statistics</button>
			</div>
			<div className={css.doughnutContainer}>
				<ChartDoughnut
					categories={categories}
					colors={colors}
					expense={expense}
				/>
			</div>
		</div>
	);
}

export default App;

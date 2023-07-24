import css from './balanceForm.module.css'

function App() {
    return (
        <div className={css['container']}>
            <p className={css['text']}>YOUR BALANCE</p>
            <h1 className={css['headertext']}>€ 24 000.00</h1>
        </div>
    )
}

export default App;
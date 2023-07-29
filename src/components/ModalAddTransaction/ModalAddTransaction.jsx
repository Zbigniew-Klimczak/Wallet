import css from "./ModalAddTransaction.module.css";

const closeByBackdrop = (event) => {
  if (event.currentTarget === event.target) {
    closeModal();
  }
};

return (
  <>
    <div className={css.Overlay} onClick={closeByBackdrop}></div>
  </>
);

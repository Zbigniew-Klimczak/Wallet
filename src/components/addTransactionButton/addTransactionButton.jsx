import css from "./AddTransactionButton.module.css";
import { useDispatch } from "react-redux";
import { setAddTransactionModal } from "../../redux/userSlice/userSlice";

const AddTransactionButton = () => {
  const dispatch = useDispatch();
  const handleLogoutModal = () => {
    dispatch(setAddTransactionModal(true));
  };
  return (
    <button onClick={handleLogoutModal} className={css.addButton}>
      +
    </button>
  );
};

export default AddTransactionButton;

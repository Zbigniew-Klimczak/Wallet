
import { useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import css from './loader.module.css';

const GlobalLoader = () => {
  const isLoading = useSelector(state => state.user.isLoading); // Zmiana na odpowiedni klucz stanu zależnie od Twojej konfiguracji

  if (!isLoading) return null;

  return (
    <div className={css.backdrop}>
      <div className={css.loader}>
        <ThreeDots
          height={100}
          width={100}
          radius={9}
          color="#24CCA7"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </div>
    </div>
  );
};

export default GlobalLoader;
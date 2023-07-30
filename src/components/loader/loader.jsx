import { ThreeDots } from 'react-loader-spinner';
import css from './loader.module.css';

const Loader=()=> {
    return (<div className= {
            css.backdrop
        }

        > <div className= {
            css.loader
        }

        > <ThreeDots height="100"
        width="100"
        radius="9"
        color="#384ab1"
        ariaLabel="three-dots-loading"

        visible= {
            true
        }

        /> </div> </div>);
}

;

export default Loader;
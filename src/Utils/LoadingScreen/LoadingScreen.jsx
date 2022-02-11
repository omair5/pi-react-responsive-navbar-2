import styles from './Loader.module.css'
import LoadingGif from '../../Assets/Images/dib-loader.gif'
const LoadingScreen = () => {
    return (
        <div className={styles.loader_container}>
            <img src={LoadingGif} alt="Loading...." />
        </div>
    );
}

export default LoadingScreen;
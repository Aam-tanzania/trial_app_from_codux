import logo from './assets/logo.svg';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <div className="header">
                <h3 className="headerText">This is my first app in codux</h3>

            </div>
            <div className="headerMenu">
                <button className="btn">Contac Us</button>
                <button className="btn">Button</button>
            </div>
            <div>
                <span className={styles.spannn}>
                    <video controls={true} src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4" className={styles.video} />
                    <ul className="LeftOption"><li>Coffee</li><li>Tea</li><li>Milk</li></ul></span>
            </div></div>
    );
}

export default App;

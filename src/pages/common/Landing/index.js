import './style.css';
import { useHistory } from 'react-router-dom';
import { AppHeader } from '../../../components';
export default function Landing() {
    const history  = useHistory();

    return (
        <div className="Landing">
            <AppHeader />
            <section className="showcase">
                <img src="/assests/build.jpg" />
                <div className="overlay"></div>
                <div className="text">
                    <h2>adMISSION Portal </h2>
                    <h3>admit with ease</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>

                    <button onClick={() => history.push('/s')}>LETS GO</button>
                </div>
            </section>
        </div>
    );
}

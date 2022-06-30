import {link} from 'react-router-dom';

const Home = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>Welcome to React Fundamentals at Eleven Fifty</h1>
                <p>
                    This app is intended to be a starter app and a learning sandbox for the month and years to come should I continue to develop with React. In this application, I will work through some of the basic React Concepts, build out some small applications, and then unleash my own applications
                </p>
                <hr/>
                <h1>Important Notes</h1>
                <ul>
                    <li>This app will simply scratch the surface of what I am capable of</li>
                    <li>
                        <Link to="/resources">React resources</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { publicRoute } from '~/routes';
import DefaultLayout from '~/components/Layout/DefaultLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home Page</Link>
                        </li>
                        <li>
                            <Link to="/following">Following Page</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile Page</Link>
                        </li>
                        <li>
                            <Link to="/upload">Upload Page</Link>
                        </li>
                        <li>
                            <Link to="/search">Search Page</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    {publicRoute.map((route, index) => {
                        let Layout = DefaultLayout;
                        const Page = route.component;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

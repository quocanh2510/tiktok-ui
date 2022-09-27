import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <ul>
                <li>
                    <Link to="/">For you</Link>
                </li>
                <li>
                    <Link to="/following">Following</Link>
                </li>
                <li>
                    <Link to="/">LIVE</Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;

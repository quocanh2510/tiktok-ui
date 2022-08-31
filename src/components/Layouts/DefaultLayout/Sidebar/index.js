import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <ul>
                <li>Dành cho bạn</li>
                <li>Following</li>
                <li>LIVE</li>
            </ul>
        </aside>
    );
}

export default Sidebar;

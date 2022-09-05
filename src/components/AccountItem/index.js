import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/6892305417544663046.jpeg?x-expires=1662386400&x-signature=DF7lb70IJDKL2X0E8jFHQLRuSoQ%3D"
                alt="Thuw"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Thuw0609</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                </p>
                <span className={cx('username')}>Phan Minh Thư</span>
            </div>
        </div>
    );
}

export default AccountItem;

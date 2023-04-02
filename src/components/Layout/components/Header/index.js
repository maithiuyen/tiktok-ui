import styles from './Header.module.scss';
import classNames from "classnames/bind";
import images from "~/assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faMagnifyingGlass, faSpinner} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
    return <h2 className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='Tiktok'/>
            </div>
            <div className={cx('search')}>
                <input placeholder={'Search accounts and video'} spellCheck={false}/>
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>
                {/*    Loading */}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    {/*    Search button */}
                </button>
            </div>
            <div className={cx('action')}>
                {/*    Action */}
            </div>
        </div>
    </h2>;
}

export default Header;

import classNames from "classnames/bind";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCircleXmark, faEarthAsia,
    faEllipsisVertical, faKeyboard,
    faMagnifyingGlass,
    faSignIn,
    faSpinner
} from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import {useEffect, useState} from "react"; // optional

import Button from "~/components/Button";
import images from "~/assets/images";
import styles from './Header.module.scss';
import {Wrapper as PopperWrapper} from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English'
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts'
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2]);
    //     }, 1000);
    // },[])


    return <h2 className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='Tiktok'/>
            </div>

            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder={'Search accounts and video'} spellCheck={false}/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>
                    {/*    Loading */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>

            </Tippy>
            <div className={cx('action')}>
                <Button text>Upload</Button>
                <Button primary>
                    Log in
                </Button>

                <Menu items={MENU_ITEMS}>
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                </Menu>
            </div>
        </div>
    </h2>;
}

export default Header;

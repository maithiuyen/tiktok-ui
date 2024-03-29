import classNames from "classnames/bind";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCoins, faEarthAsia,
    faEllipsisVertical, faGear, faKeyboard,
    faSignOut,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';

import Button from "~/components/Button";
import images from "~/assets/images";
import styles from './Header.module.scss';
import Menu from "~/components/Popper/Menu";
import {faModx} from "@fortawesome/free-brands-svg-icons";
import {InboxIcon, MessageIcon} from "~/components/Icons";
import Image from "~/components/Image";
import Search from "~/components/Layout/components/Search";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
            ]
        }
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
    const currentUser = true;


    // Handle logic menu
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
        switch (menuItem.type) {
            case 'language':
                break;
            default:
                break;
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}/>,
            title: 'View profile',
            to: '/@chung'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}/>,
            title: 'Get coins',
            to: '/@coins'
        },
        {
            icon: <FontAwesomeIcon icon={faGear}/>,
            title: 'Settings',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faModx}/>,
            title: 'Feedback and help',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut}/>,
            title: 'Signout',
            to: '/logout',
            separate: true
        }
    ];


    return <h2 className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='Tiktok'/>
            </div>

            <Search/>

            <div className={cx('actions')}>
                <Button text>Upload</Button>
                {currentUser ? (
                    <>
                        <Tippy content='Messages'>
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                        <Tippy content='Inbox'>
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button primary>
                            Log in
                        </Button>
                    </>
                )
                }

                <Menu items= {currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>

                    {currentUser ? (
                        <Image src={'https://p1-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8d882bdb02a12737e891b2257b9f3a31~c5_100x100.jpeg?x-expires=1681995600&x-signature=upUEtnQOVsRMg1RehS0ZFCWSgBk%3D'} className={cx('user-avatar')} alt={'NVC'} />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </button>
                    )}
                </Menu>
            </div>
        < /div>
    </h2>;
}

export default Header;

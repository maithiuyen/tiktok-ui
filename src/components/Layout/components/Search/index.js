import {Wrapper as PopperWrapper} from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faMagnifyingGlass, faSpinner} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react";
import classNames from "classnames/bind";
import styles from "~/components/Layout/components/Search/Search.module.scss";
import {useEffect, useRef, useState} from "react";

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);
        fetch(` https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => {
                setLoading(false);
                return res.json();
            })
            .then(res => {
                console.log(res);
                setSearchResult(res.data);
            });
    }, [searchValue]);

    const handleHideResult = () => {
        setShowResult(false);
    }

    return (
        <HeadlessTippy
            animation
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {searchResult.map((data) => (
                            <AccountItem key={data.id} data={data}></AccountItem>
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input placeholder={'Search accounts and video'}
                       onChange={(e) => {
                           setSearchValue(e.target.value)
                       }}
                       spellCheck={false}
                       ref={inputRef}
                       value={searchValue}
                       onFocus={() => {setShowResult(true)}}
                />
                {!!searchValue && !loading && (
                        <button className={cx('clear')}
                                onClick={() => {
                                    setSearchValue('');
                                    inputRef.current.focus();
                                }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                    )
                }
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>
            </div>
        </HeadlessTippy>
    )
}

export default Search;
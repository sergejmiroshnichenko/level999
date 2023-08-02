import styles from './Header.module.scss'
import { FaUserTie as User } from 'react-icons/fa'
import { useAppSelector } from 'hooks/redux-hooks'


const Header = () => {

    const name  = useAppSelector(state => state.user.name)

    return (
        <header>
            <nav className={styles.header_nav}>
                <ul className={styles.header_list}>
                    <li><em>
                        <span className={styles.header_icon}>
                            <User/>
                            </span></em>&nbsp;
                        <strong>{name}</strong>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header
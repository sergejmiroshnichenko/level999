import { useAppDispatch } from 'hooks/redux-hooks'
import Form from 'components/Form/Form'
import { setUser } from 'stores/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import styles from './LoginPage.module.scss'

const LoginPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const storedName = localStorage.getItem('username')

    if (storedName) {
        dispatch(setUser({ name: storedName }))
    }

    const handleRegister = (value: string) => {
        localStorage.setItem('username', value)
        dispatch(setUser({ name: value }));
        navigate('/home')
    }

    return (
        <main className={styles.main}>
            <Form
                placeholder='Enter name'
                handleClick={handleRegister}
                title='Registration'
            />
        </main>
    )
}

export default LoginPage
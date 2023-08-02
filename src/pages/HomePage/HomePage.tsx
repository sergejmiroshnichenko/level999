import Header from 'components/Header/Header'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { SlNote } from 'react-icons/sl'
import styles from './HomePage.module.scss'
import { useEffect, useState } from 'react'
import Modal from 'components/Modal/Modal'
import { updateName } from 'stores/slices/userSlice'
import Form from 'components/Form/Form'


const HomePage = () => {
    const [modalActive, setModalActive] = useState(false)
    const userName = useAppSelector(state => state.user.name)

    const dispatch = useAppDispatch()

    const [editedName, setEditedName] = useState<string>(
        () => {
            const storedName = localStorage.getItem('username')
            return storedName ? storedName : userName
        }
    )

    const handleEditClick = () => {
        setModalActive(true)
        const storedName = localStorage.getItem('username')
        setEditedName(storedName ? storedName : userName);
    };

    const handleUpdateName = (value: string) => {
        dispatch(updateName({ newName: value }))
        localStorage.setItem('username', value)
        setModalActive(false)
    };

    useEffect(() => {
        const storedName = localStorage.getItem('username')
        if (storedName) {
            dispatch(updateName({ newName: storedName }));
        }
    }, [dispatch])

    return (
        <>
            <Header/>
            <main>
                <div className={styles.user_wrapper}>
                    <h3>Welcome, 👋 <br/><span>{userName}</span></h3>
                    <button onClick={() => {
                        setModalActive(true);
                        handleEditClick()
                    }}>
                        edit <SlNote/>
                    </button>
                </div>
            </main>
            <Modal active={modalActive} setActive={setModalActive}
                   title={'Confirmation'}>
                <Form
                    title='Change name'
                    placeholder='Change name'
                    handleClick={handleUpdateName}
                    initialName={editedName}
                />
            </Modal>
        </>
    );
};

export default HomePage

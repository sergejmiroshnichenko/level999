import styles from './Modal.module.scss'
import classNames from 'classnames'
import { MdOutlineClose } from 'react-icons/md'
import { FC, ReactNode } from 'react'

interface ModalProps {
    active: boolean
    setActive: (active: boolean) => void
    children: ReactNode
    title: string
}

const Modal: FC<ModalProps> = ({ active, setActive, children, title }) => {

    return (
        <div className={classNames(styles.modal_background, active && styles.active)}
             onClick={() => setActive(false)}>
            <div className={classNames(
                styles.modal_content,
                active && styles.active,
            )} onClick={e => e.stopPropagation()}>
                <div className={styles.title}>
                    <h3 className={styles.confirmation}>{title}</h3>
                    <MdOutlineClose className={styles.cross} onClick={() => setActive(false)}/>
                </div>
                <div className={styles.block}>
                    {children}
                </div>
                <div className={styles.btnBlock}> </div>
            </div>
        </div>
    )
};

export default Modal;
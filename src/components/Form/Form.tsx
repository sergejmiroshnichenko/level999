import React, { FC, FormEvent, useEffect, useState } from 'react'
import styles from './Form.module.scss'

interface FormProps {
    title: string
    handleClick: (value: string, e?: FormEvent<HTMLFormElement>) => void
    initialName?: string
    placeholder: string
}

const Form: FC<FormProps> = ({ title, handleClick, initialName = '', placeholder }) => {

    const [value, setValue] = useState<string>(initialName)
    const [valueDirty, setValueDirty] = useState<boolean>(false)
    const [valueError, setValueError] = useState<string>('')
    const [formValid, setFormValid] = useState<boolean>(false)

    useEffect(() => {
        if (valueError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [valueError])

    const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const minLength = 3;
        const maxLength = 8;
        const minLengthErrorMessage = `name must be at least ${minLength} letters `;
        const maxLengthErrorMessage = `name must be no more than ${maxLength} letters`;

        if (!/^[A-Za-z]*$/i.test(newValue) && newValue !== '') {
            setValue(newValue);
            setValueDirty(true);
            setValueError('only english letters');
        } else {
            setValue(newValue);
            setValueDirty(true);
            if (newValue.length < minLength) {
                setValueError(minLengthErrorMessage);
            } else if (newValue.length > maxLength) {
                setValueError(maxLengthErrorMessage);
            } else {
                setValueError('');
            }
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleClick(value, e)
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{title}</h2>
            <input value={value}
                   onChange={valueHandler}
                   type="text"
                   required
                   placeholder={placeholder}
            />
            {valueDirty && <p className={styles.errorMessage}>{valueError}</p>}
            <button
                disabled={!formValid}
                type="submit"
            >
                save
            </button>
        </form>
    )
}

export default Form
'use client'
import styles from './Checkbox.module.css'

type ICheckboxProps = {
    isDefaultChecked: boolean,
    label: string,
    index: number,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

export default function Checkbox({ isDefaultChecked, label, index, handleChange }: ICheckboxProps) {
    return (
        <>
            <label className={styles.checkboxContainer}>
                <input type="checkbox" onChange={(event) => handleChange(event, index)} defaultChecked={isDefaultChecked} />
                <span className={styles.checkmark}></span>
                <span className={styles.checkboxLabel}>
                    {label}
                </span>
            </label>
        </>
    )
}
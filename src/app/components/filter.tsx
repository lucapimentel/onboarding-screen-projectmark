'use client'

import { useState } from 'react';
import Checkbox from './checkbox'
import { ICheckboxOption } from '../types';
import styles from './filter.module.css'

const filterOptions: ICheckboxOption[] = [
    {
        label: 'Basic',
        value: true,
    },
    {
        label: 'Advanced',
        value: false
    },
    {
        label: 'Expert',
        value: false
    },
    {
        label: 'Custom',
        value: false
    },
]

export default function Filter() {
    const [options, setOptions] = useState<ICheckboxOption[]>(filterOptions);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const isChecked = event.target.checked;
        const updatedOptions = options.reduce<ICheckboxOption[]>((acc, option, id) => {
            if (id === index) {
                acc.push({ ...option, value: isChecked })
            } else {
                acc.push(option)
            }
            return acc
        }, [])

        setOptions(updatedOptions)
    }


    return (
        <div className={styles.contentHeader}>
            <h2>Please select the type of sales pipeline that best fits to your company</h2>
            <div className={styles.controlContainer}>
                {options?.map((option, index) => {
                    return (
                        <div className={option.value ? `${styles.contentHeaderControls} ${styles.contentHeaderControlsActive}` : styles.contentHeaderControls} key={option.label}>
                            <Checkbox
                                isDefaultChecked={option.value}
                                label={option.label}
                                index={index}
                                handleChange={handleFilterChange}
                            />
                        </div >
                    )
                })}
            </div>
        </div>
    )
}
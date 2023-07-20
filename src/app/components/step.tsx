import { IStepOption } from '../types'
import styles from './step.module.css'

type IStepProps = {
    currentStep: IStepOption
}

export default function Step({ currentStep }: IStepProps) {
    return (
        <>
            <div className={styles.step}>
                <div className={styles.step}>
                    <div className={currentStep?.isCurrentStep ? `${styles.stepInfo} ${styles.stepInfoActive}` : styles.stepInfo}>{currentStep.stepIndex}</div>
                    <span>{currentStep?.title}</span>
                </div>
            </div>
        </>
    )
}
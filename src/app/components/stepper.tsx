import { STEPS } from '../utilities'
import Step from './Step'
import styles from './Stepper.module.css'

export default function Stepper() {
    return (
        <div className={styles.stepsContainer}>
            {STEPS.map((step) => {
                return <Step currentStep={step} key={step.stepIndex} />
            })}
        </div>
    )
}
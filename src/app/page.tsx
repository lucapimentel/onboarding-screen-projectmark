import Image from 'next/image'
import logo from './images/project-logo.png';
import Column from './components/column';
import Filter from './components/filter';
import Stepper from './components/stepper';
import { COLUMNS } from './utilities';
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <Image src={logo} width={60} height={60} alt='logo' quality={100} />
          <Stepper />
          <div className={styles.headerButtonContainer}>
            <button className='button primary'>Next</button>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <Filter />
        <div className={styles.contentGrid}>
          <div className={styles.gridColumnContainer}>
            {COLUMNS.map((column) => {
              return <Column columnInfo={column} key={column.title} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

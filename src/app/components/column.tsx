import { IColumn } from "../types";
import { columnColorScheme } from "../utilities";
import styles from './Column.module.css'

type IColumnProps = {
    columnInfo: IColumn
}

export default function Column({ columnInfo }: IColumnProps) {
    const colorScheme = columnColorScheme[columnInfo?.columnType];

    const columnGradient = { background: `linear-gradient(to bottom, var(${colorScheme.primary}) 50%, #FFFF)` }
    const columnHeaderTextColor = { color: `var(${colorScheme.textColor})` }
    const columnContentColor = { backgroundColor: `var(${colorScheme.secondary})` }
    const columnContentInfoColor = { backgroundColor: `var(${colorScheme.terciary})` }
    const cardContainerColor = { borderColor: `var(${colorScheme.secondary})` }

    const totalCardsAmount = columnInfo?.cards.reduce((acc, card) => {
        return acc + card.amount;
    }, 0);

    return (
        <div className={styles.gridColumn} style={columnGradient}>
            <div className={styles.gridColumnHeader} style={columnHeaderTextColor}>
                <h4>{columnInfo?.title}</h4>
                <div className={styles.gridColumnInfo} style={columnContentColor}>
                    <div className={styles.info} style={columnContentInfoColor}>
                        {/* {columnInfo?.cards.length} */}
                    </div>
                    <div className={styles.infoContent}>
                        {/* {totalCardsAmount} */}
                    </div>
                </div>
            </div>
            <div className={styles.cardContainer} style={cardContainerColor}>
                {/* add card */}
            </div>
        </div>
    )
}
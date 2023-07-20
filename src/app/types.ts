export type ICheckboxOption = {
    label: string,
    value: boolean,
    isDisabled?: boolean,
}

export type IStepOption = {
    path: string,
    title: string,
    isCurrentStep: boolean,
    stepIndex: number,
}

export type ColumnTheme = {
    primary: string,
    secondary: string,
    terciary: string,
    textColor: string,
}

export type Priorities = 'High' | 'Medium' | 'Low'

export type ColumnType = 'Lead' | 'RFP' | 'Submitted' | 'Won' | 'Lost' | 'Closed'

export type IUser = {
    name: string,
    profilePicture: string,
}

export type ICard = {
    title: string,
    user: IUser,
    amount: number,
    createDate: Date,
    priority: Priorities,
}

export type IColumn = {
    title: string,
    columnType: ColumnType,
    cards: ICard[],
}
import { IColumn, ColumnType, ColumnTheme, IStepOption } from "./types";

export const columnColorScheme: Record<ColumnType, ColumnTheme> = {
    Lead: {
        primary: '--magnolia',
        secondary: '--pale-purple',
        terciary: '--mauve',
        textColor: '--ultra-violet'
    },
    RFP: {
        primary: '--seashell',
        secondary: '--almond',
        terciary: '--light-orange',
        textColor: '--kobicha'
    },
    Submitted: {
        primary: '--alice-blue',
        secondary: '--uranian-blue',
        terciary: '--light-sky-blue',
        textColor: '--indigo-dye'
    },

    Won: {
        primary: '--azure-web',
        secondary: '--celeste',
        terciary: '--tiffany-blue',
        textColor: '--dark-slate-gray'
    },

    Lost: {
        primary: '--lavender-blush',
        secondary: '--mimi-pink',
        terciary: '--orchid-pink',
        textColor: '--rose-taupe'
    },

    Closed: {
        primary: '--alice-blue-2',
        secondary: '--alice-blue-4',
        terciary: '--french-gray',
        textColor: '--paynes-gray'
    }

};

export const COLUMNS: IColumn[] = [
    {
        title: 'Lead',
        columnType: 'Lead',
        cards: [],
    },
    {
        title: 'RFP In Progess',
        columnType: 'RFP',
        cards: [],
    },
    {
        title: 'Submitted',
        columnType: 'Submitted',
        cards: [],
    },
    {
        title: 'Won',
        columnType: 'Won',
        cards: [],
    },
    {
        title: 'Lost',
        columnType: 'Lost',
        cards: [],
    },
    {
        title: 'Closed',
        columnType: 'Closed',
        cards: [],
    }
]

export const STEPS: IStepOption[] = [
    {
        path: '/',
        title: 'Sales Pipeline Settings',
        isCurrentStep: true,
        stepIndex: 1,
    },
    {
        path: '/',
        title: 'Opportunity Details Settings',
        isCurrentStep: false,
        stepIndex: 2,
    }
]
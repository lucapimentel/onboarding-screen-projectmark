import { render } from '@testing-library/react';
import Column from './Column';
import { columnColorScheme } from '../utilities';
import { IColumn } from '../types';
import '@testing-library/jest-dom';

const mockColumnInfo: IColumn = {
    title: 'Lead',
    columnType: 'Lead',
    cards: [],
};

it('renders column title correctly', () => {
    const { getByText } = render(<Column columnInfo={mockColumnInfo} />);
    const columnTitle = getByText(mockColumnInfo.title);
    expect(columnTitle).toBeInTheDocument();
});

it('renders column gradient with correct primary color', () => {
    const { container } = render(<Column columnInfo={mockColumnInfo} />);
    const columnGradient = container.getElementsByClassName('gridColumn')[0];
    const colorScheme = columnColorScheme[mockColumnInfo.columnType];

    expect(columnGradient).toHaveStyle(`background: linear-gradient(to bottom, var(${colorScheme.primary}) 50%, #FFFF)`);
});

it('renders column header text with correct text color', () => {
    const { container } = render(<Column columnInfo={mockColumnInfo} />);
    const columnHeader = container.getElementsByClassName('gridColumnHeader')[0];
    const colorScheme = columnColorScheme[mockColumnInfo.columnType];

    expect(columnHeader).toHaveStyle(`color: var(${colorScheme.textColor})`);
});

it('renders column content with correct secondary color', () => {
    const { container } = render(<Column columnInfo={mockColumnInfo} />);
    const columnContent = container.getElementsByClassName('gridColumnInfo')[0];
    const colorScheme = columnColorScheme[mockColumnInfo.columnType];

    expect(columnContent).toHaveStyle(`background-color: var(${colorScheme.secondary})`);
});

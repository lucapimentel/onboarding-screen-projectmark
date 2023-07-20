import { render, fireEvent } from '@testing-library/react';
import Filter from './filter';
import '@testing-library/jest-dom';

it('renders filter options correctly', () => {
    const { getByText } = render(<Filter />);

    const basicOption = getByText('Basic');
    const advancedOption = getByText('Advanced');
    const expertOption = getByText('Expert');
    const customOption = getByText('Custom');

    expect(basicOption).toBeInTheDocument;
    expect(advancedOption).toBeInTheDocument;
    expect(expertOption).toBeInTheDocument;
    expect(customOption).toBeInTheDocument;
});

it('updates the state when a filter option is clicked', () => {
    const { getByText } = render(<Filter />);

    const advancedOption = getByText('Advanced');
    fireEvent.click(advancedOption);

    const updatedAdvancedOption = getByText('Advanced');
    expect(updatedAdvancedOption).toBeChecked;

    const basicOption = getByText('Basic');
    expect(basicOption).not.toBeChecked;
});
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

it('renders Checkbox component with the correct label', () => {
    const expectedLabelValue = 'label'
    const props = {
        isDefaultChecked: false,
        label: expectedLabelValue,
        index: 0,
        handleChange: jest.fn(),
    };

    const { getByText } = render(<Checkbox {...props} />);

    const checkboxLabel = getByText(expectedLabelValue);
    expect(checkboxLabel).toBeInTheDocument;
});

it('calls handleChange function with the correct attributes when the checkbox changes', () => {
    const mockEventObject = expect.any(Object);
    const expectedIndex = 0;
    const handleChange = jest.fn();

    const props = {
        isDefaultChecked: false,
        label: 'label',
        index: expectedIndex,
        handleChange: handleChange,
    };

    const { getByLabelText } = render(<Checkbox {...props} />);

    const checkboxInput = getByLabelText('label');
    fireEvent.click(checkboxInput);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(mockEventObject, expectedIndex);
});

it('renders checkboxdefaultChecked prop correctly', () => {
    const props = {
        isDefaultChecked: true,
        label: 'label',
        index: 0,
        handleChange: jest.fn(),
    };

    const { getByLabelText } = render(<Checkbox {...props} />);

    const checkboxInput = getByLabelText('label');
    expect(checkboxInput).toBeChecked;
});
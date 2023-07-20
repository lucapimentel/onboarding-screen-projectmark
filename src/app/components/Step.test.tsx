import { render } from '@testing-library/react';
import Step from './Step';
import { IStepOption } from '../types';
import '@testing-library/jest-dom';

const mockStep: IStepOption = {
    path: '/',
    stepIndex: 1,
    title: 'Step#1',
    isCurrentStep: true,
};

it('renders Step component with correct step information', () => {
    const { getByText } = render(<Step currentStep={mockStep} />);

    const stepIndex = getByText('1');
    const titleValue = getByText('Step#1');

    expect(stepIndex).toBeInTheDocument();
    expect(titleValue).toBeInTheDocument();
});

it('changes styles when the current step is active', () => {
    const { getByText } = render(<Step currentStep={mockStep} />);

    const activeStepIndex = getByText('1');

    expect(activeStepIndex).toHaveClass('stepInfo');
    expect(activeStepIndex).toHaveClass('stepInfoActive');
});

it('does not apply active styles when the current step is not active', () => {
    const nonActiveMockStep: IStepOption = {
        path: '/',
        stepIndex: 2,
        title: 'Another Step',
        isCurrentStep: false,
    };

    const { getByText } = render(<Step currentStep={nonActiveMockStep} />);

    const nonActiveStepIndex = getByText('2');

    expect(nonActiveStepIndex).toHaveClass('stepInfo');
    expect(nonActiveStepIndex).not.toHaveClass('stepInfoActive');
});

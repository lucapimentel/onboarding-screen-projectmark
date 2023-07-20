import { render } from '@testing-library/react';
import Stepper from './stepper';
import { STEPS } from '../utilities';
import '@testing-library/jest-dom';

it('renders all steps', () => {
    const { container } = render(<Stepper />);

    const setpInfos = container.getElementsByClassName('stepInfo')
    expect(setpInfos).toHaveLength(STEPS.length);
});
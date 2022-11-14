import React from 'react';
import {render} from '@testing-library/react-native';
import KeyboardInteraction from './keyboard-interaction';

describe('KeyboardInteraction', () => {
  it('should render successfully', () => {
    const {container} = render(<KeyboardInteraction />);
    expect(container).toBeTruthy();
  });
});

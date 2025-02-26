import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { DetailsView } from '../index';

const props = {
  formattedPrice: '',
  handleGoBack: () => {}
};

describe('DetailsView component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<DetailsView {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

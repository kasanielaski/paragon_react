import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react';

import { Navigation } from '../index';

const props = {
  page: 1,
  isLastPage: true,
  handlePageChange: () => {}
};

describe('Navigation component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Navigation {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

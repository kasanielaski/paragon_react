import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react';

import { CatalogList } from '../index';

const props = {
  handleDetails: () => {}
};

describe('CatalogList component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<CatalogList {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

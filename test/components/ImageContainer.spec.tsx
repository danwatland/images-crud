import * as React from 'react';
import * as ImageService from '../../src/services/ImageService';
import { ImageContainer } from '../../src/components/ImageContainer';
import { render } from '@testing-library/react';

jest.mock('../../src/services/ImageService');

describe('ImageContainer', () => {
  const mockedImageService = ImageService as jest.Mocked<typeof ImageService>;
  let images;

  beforeEach(() => {
    images = ['apple', 'banana', 'carrot', 'bigger carrot'];
    mockedImageService.getImages.mockResolvedValue(images);
  });

  it('should display all images once loaded', async () => {
    const rendered = render(<ImageContainer searchText={''} />);

    expect(await rendered.findByAltText(/apple/)).toBeInTheDocument();
    expect(rendered.getByAltText(/banana/)).toBeInTheDocument();
    expect(rendered.getAllByAltText(/carrot/)).toHaveLength(2);
  });

  it('should filter if search text is provided', async () => {
    const rendered = render(<ImageContainer searchText={'carrot'} />);

    expect(await rendered.findAllByAltText(/carrot/)).toHaveLength(2);
    expect(rendered.queryByAltText(/apple/)).not.toBeInTheDocument();
    expect(rendered.queryByAltText(/banana/)).not.toBeInTheDocument();
  });
});
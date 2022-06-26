import baseUrl from '.';

describe('baseUrl()', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return path without modified anything', () => {
    const result = baseUrl('/images/logo.png');
    expect(result).toBe('/images/logo.png');
  });
});

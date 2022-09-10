import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jestFetchMock from 'jest-fetch-mock';

Enzyme.configure({ adapter: new Adapter() });

// next/router mock implementation
jest.mock('next/router', () => ({
  push: jest.fn(),
  useRouter: () => ({
    pathname: '',
    push: () => jest.fn(),
  }),
}));

jestFetchMock.enableMocks();

import { shallow } from 'enzyme';
import StaffPage from 'pages/staff/[id]';

import { MOCK_API } from 'modules/staff/hooks/useStaffDetail.spec';

describe('StaffPage /[id] Tests', () => {
  it('Navbar menu should be defined', () => {
    const wrapper = shallow(<StaffPage data={MOCK_API} />);
    expect(wrapper).toMatchSnapshot();
  });
});

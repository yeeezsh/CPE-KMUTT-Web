import { shallow } from 'enzyme';

import StaffCommonSection from 'modules/staff/components/StaffCommonContactSection';

describe('StaffCommonContactSection Tests', () => {
  it('StaffCommonContactSection  to match snapshot', () => {
    const wrapper = shallow(<StaffCommonSection header="" />);
    expect(wrapper).toMatchSnapshot();
  });
});

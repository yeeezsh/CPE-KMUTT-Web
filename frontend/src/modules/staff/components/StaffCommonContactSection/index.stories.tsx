import { Meta, Story } from '@storybook/react/types-6-0';

import StaffCommonSection from 'modules/staff/components/StaffCommonContactSection';
import { StaffCommonContactSectionProps } from 'modules/staff/components/StaffCommonContactSection/types';
import { StyledTable } from 'modules/staff/components/StaffContactSection/styled';
import MOCK_STAFF_DETAIL from 'modules/staff/mocks/staff_detail';

export default {
  title: 'modules/staff/components/StaffCommonContactSection',
  component: StaffCommonSection,
  args: {
    header: 'วิชาที่สอน',
    children: (
      <StyledTable>
        <tr>
          <td>รหัสวิชา</td>
          <td>ชื่อวิชา</td>
        </tr>
        {MOCK_STAFF_DETAIL.subjects.map((s) => (
          <>
            <td>{s.subjectId}</td>
            <td>{s.title}</td>
          </>
        ))}
      </StyledTable>
    ),
  },
} as Meta;

const Template: Story<StaffCommonContactSectionProps> = (args) => (
  <StaffCommonSection {...args} />
);

export const Default = Template.bind({});

import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Card from '.';

const meta: Meta = {
  title: 'Commmon/Card',
  component: Card,
};

export default meta;

export const Default: React.FC = () => (
  <Card
    title="การรับเข้าศึกษา"
    description="ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563"
    date="28 ตุลาคม 2563"
    id="1"
    variant="normal"
  />
);

import { Meta, Story } from '@storybook/react/types-6-0';
import { GlobalStyle } from 'modules/root/page/App/styled';
import React from 'react';
import Card from '.';
import { CardProps } from './types';

const meta: Meta = {
  title: 'Common/Card',
  component: Card,
};

export default meta;

export const Default: Story<CardProps> = () => (
  <>
    <GlobalStyle />
    <Card
      title="การรับเข้าศึกษา"
      description="ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563"
      date="28 ตุลาคม 2563"
      id="1"
      variant="normal"
    />
  </>
);

export const Variant: Story<CardProps> = () => (
  <>
    <GlobalStyle />
    <div>
      <Card
        title="การรับเข้าศึกษา"
        description="ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563"
        date="28 ตุลาคม 2563"
        id="1"
        variant="primary"
        links="/images/thumbnail.png"
      />
    </div>
  </>
);

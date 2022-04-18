import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { GlobalStyle } from 'modules/root/pages/App/styled';

import { CardProps, CardVariant } from './types';

import Card from '.';

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
      variant={CardVariant.normal}
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
        variant={CardVariant.primary}
        thumbnail="/images/thumbnail.png"
      />
    </div>
  </>
);

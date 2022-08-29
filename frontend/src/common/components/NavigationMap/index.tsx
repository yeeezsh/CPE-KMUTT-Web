import React from 'react';

import { Breadcrumb } from 'antd';
import Link from 'next/link';

import {
  NavigationMapBody,
  NavigationMapContainer,
} from 'common/components/NavigationMap/styled';

const NavigationMap: React.FC<{ breadcrumb: { title: string; url?: string }[] }> = ({
  breadcrumb,
}) => {
  return (
    <NavigationMapBody>
      <NavigationMapContainer>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">หน้าแรก</Link>
          </Breadcrumb.Item>
          {breadcrumb.map((item) => (
            <Breadcrumb.Item key={item.title}>
              {item.url ? <Link href={item.url}>{item.title}</Link> : <>{item.title}</>}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </NavigationMapContainer>
    </NavigationMapBody>
  );
};

export default NavigationMap;

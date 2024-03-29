import React from 'react';

import Link from 'next/link';

import { SIDEBAR_ITEMS } from 'modules/about-us/components/SidebarSection/constants';
import {
  SidebarBody,
  SidebarContent,
  SidebarItem,
  SidebarTitle,
} from 'modules/about-us/components/SidebarSection/styled';

const SidebarSection: React.FC<{
  activeKey: string;
}> = ({ activeKey }) => {
  return (
    <SidebarBody>
      {SIDEBAR_ITEMS.map(({ title, item }) => (
        <SidebarContent key={title}>
          <SidebarTitle>{title}</SidebarTitle>
          {item.map(({ title, url, key }) => (
            <SidebarItem key={title} className={`${activeKey === key && 'active'}`}>
              <Link href={url}>{title}</Link>
            </SidebarItem>
          ))}
        </SidebarContent>
      ))}
    </SidebarBody>
  );
};

export default SidebarSection;

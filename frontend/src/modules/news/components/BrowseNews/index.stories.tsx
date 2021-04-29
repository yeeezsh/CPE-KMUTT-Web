import { Meta, Story } from '@storybook/react/types-6-0';

import { GlobalStyle } from 'modules/root/pages/App/styled';

import { BrowseNewsProps } from './types';

import BrowseNews from '.';

export default {
  title: 'Modules/News/Components/BrowseNews',
  component: BrowseNews,
} as Meta;

export const BrowseNewsStory: Story<BrowseNewsProps> = () => (
  <>
    <GlobalStyle />
    <BrowseNews />
  </>
);

import { Meta, Story } from '@storybook/react/types-6-0';
import { GlobalStyle } from 'modules/root/page/App/styled';
import BrowseNews from '.';
import { BrowseNewsProps } from './types';

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

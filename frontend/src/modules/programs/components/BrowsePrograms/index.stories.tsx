import { Meta, Story } from '@storybook/react/types-6-0';

import BrowsePrograms from 'modules/programs/components/BrowsePrograms';
import { MOCK_PROGRAMS } from 'modules/programs/components/BrowsePrograms/constant';
import { BrowseProgramProps } from 'modules/programs/components/BrowsePrograms/types';
import { GlobalStyle } from 'modules/root/pages/App/styled';

export default {
  title: 'Modules/Program/Components/BrowseProgram',
  component: BrowsePrograms,
} as Meta;

export const BrowseProgramStory: Story<BrowseProgramProps> = () => (
  <>
    <GlobalStyle />
    <BrowsePrograms data={MOCK_PROGRAMS} />
  </>
);

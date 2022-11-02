import { useRouter } from 'next/router';

import Card from 'common/components/Card';
import { CardVariant } from 'common/components/Card/types';
import Divider from 'common/components/Divider';
import { H2, H3 } from 'common/components/Heading/styled';
import COLORS from 'common/constants/colors';
import { STATIC_PROGRAMS_ID_LINK_PATTERN } from 'common/constants/links';

import {
  BrowseProgramRow,
  Header,
} from 'modules/programs/components/BrowsePrograms/styled';
import {
  BrowseProgramProps,
  BrowseProgramType,
  ProgramType,
} from 'modules/programs/components/BrowsePrograms/types';

const Row: React.FC<{ data: ProgramType[] }> = (props) => {
  const router = useRouter();
  function onCardClick(url?: string) {
    url &&
      router.push(
        STATIC_PROGRAMS_ID_LINK_PATTERN.replace(STATIC_PROGRAMS_ID_LINK_PATTERN, url),
      );
  }

  return (
    <>
      {/* <Divider header={<H1>{props.data}<H1/>} /> */}
      <BrowseProgramRow>
        {props.data.map((p) => (
          <Card
            onClick={() => onCardClick(p.id)}
            key={p.id}
            description={p.header}
            thumbnail={p.preview_url}
            id={p.id}
            variant={CardVariant.primary}
          />
        ))}
      </BrowseProgramRow>
    </>
  );
};

const Group: React.FC<{ data: BrowseProgramType['group'] }> = (props) => (
  <Header>
    <H2 style={{ margin: 0, color: COLORS.PRIMARY_COLOR }}>{props.data.title}</H2>
    <H3 style={{ color: COLORS.GRAY_2 }}>{props.data.sub_title}</H3>
  </Header>
);

const ProgramGroup: React.FC<{ data: BrowseProgramType }> = (props) => {
  return (
    <>
      <Divider header={<Group data={props.data.group} />} />
      <Row key={props.data.group.id} data={props.data.programs} />
    </>
  );
};

const BrowsePrograms: React.FC<BrowseProgramProps> = ({ data }) => {
  return <>{data && data.map((g) => <ProgramGroup key={g.group.id} data={g} />)}</>;
};
export default BrowsePrograms;
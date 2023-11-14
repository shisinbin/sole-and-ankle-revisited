import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <SortSelectWrapper>
            <Select
              label='Sort'
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value='newest'>Newest Releases</option>
              <option value='price'>Price</option>
            </Select>
          </SortSelectWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <SidePanel>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale/shoes'>
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <DesktopSidebar>
          <Spacer size={42} />
          <ShoeSidebar />
        </DesktopSidebar>
      </SidePanel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    flex-direction: column-reverse;
    gap: 0;
    align-items: revert;
  }

  @media ${(p) => p.theme.queries.mobileAndSmaller} {
    gap: 16px;
  }
`;

const SidePanel = styled.div`
  flex-basis: 248px;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    flex-basis: revert;
  }
`;

const DesktopSidebar = styled.div`
  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const SortSelectWrapper = styled.div`
  @media ${(p) => p.theme.queries.mobileAndSmaller} {
    display: none;
  }
`;

export default ShoeIndex;

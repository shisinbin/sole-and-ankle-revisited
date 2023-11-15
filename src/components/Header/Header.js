import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <UnstyledButton>
            <Icon id='shopping-bag' strokeWidth={2} />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id='search' strokeWidth={2} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id='menu' strokeWidth={2} />
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    border-top: 4px solid ${COLORS.gray[900]};
    align-items: center;
  }

  @media ${(p) => p.theme.queries.mobileAndSmaller} {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    display: flex;
    gap: clamp(1rem, 8vw - 3.5rem, 3rem);
    margin-left: 1rem;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    flex: revert;
  }
`;

const Filler = styled(Side)`
  flex: 1;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;

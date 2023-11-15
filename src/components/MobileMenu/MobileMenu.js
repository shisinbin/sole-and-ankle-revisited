/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { Dialog } from '@headlessui/react';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  // if (!isOpen) {
  //   return null;
  // }

  return (
    // <div>
    //   <button onClick={onDismiss}>Dismiss menu</button>
    //   <nav>
    //     <a href="/sale">Sale</a>
    //     <a href="/new">New&nbsp;Releases</a>
    //     <a href="/men">Men</a>
    //     <a href="/women">Women</a>
    //     <a href="/kids">Kids</a>
    //     <a href="/collections">Collections</a>
    //   </nav>
    //   <footer>
    //     <a href="/terms">Terms and Conditions</a>
    //     <a href="/privacy">Privacy Policy</a>
    //     <a href="/contact">Contact Us</a>
    //   </footer>
    // </div>

    <HamburgerWrapper open={isOpen} onClose={onDismiss}>
      <Backdrop />
      <HamburgerMenu>
        <CloseButton onClick={onDismiss}>
          <Icon id='close' strokeWidth={2} />
          <VisuallyHidden>Dismiss Menu</VisuallyHidden>
        </CloseButton>

        <Filler />
        <Dialog.Title>
          <VisuallyHidden>Navigation Menu</VisuallyHidden>
        </Dialog.Title>
        <MobileNav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </MobileNav>
        <Footer>
          <FooterLink href='/terms'>Terms and Conditions</FooterLink>
          <FooterLink href='/privacy'>Privacy Policy</FooterLink>
          <FooterLink href='/contact'>Contact Us</FooterLink>
        </Footer>
      </HamburgerMenu>
    </HamburgerWrapper>
  );
};

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const HamburgerWrapper = styled(Dialog)`
  position: fixed;
  inset: 0;
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background: hsl(220 5% 40% / 0.8);
  /* backdrop-filter: blur(3px); */

  animation: ${fadeIn} 850ms cubic-bezier(0.14, 0.78, 0.36, 1);
`;

const HamburgerMenu = styled(Dialog.Panel)`
  position: absolute;
  background: ${COLORS.white};
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  padding: 32px;
  display: flex;
  flex-direction: column;

  animation: ${slideIn} 500ms cubic-bezier(0.14, 0.78, 0.36, 1);
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;
  color: ${COLORS.gray[700]};
`;

export default MobileMenu;

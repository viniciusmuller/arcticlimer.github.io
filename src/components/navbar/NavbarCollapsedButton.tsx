import { useState } from 'react';
import { TiHome } from 'react-icons/ti';
import IconButton from '@material-ui/core/IconButton';

import ButtonCollapseWrapper from '@styles/components/navbar/navbarCollapsedButton';
import MobileDrawer from './MobileDrawer';

function NavbarCollapsedButton() {
  const [open, setOpen] = useState(false);

  return (
    <ButtonCollapseWrapper>
      <IconButton
        aria-label="toggles mobile navigation"
        onClick={() => setOpen(!open)}
      >
        <TiHome />
      </IconButton>
      <MobileDrawer open={open} onClick={() => setOpen(!open)} />
    </ButtonCollapseWrapper>
  );
}

export default NavbarCollapsedButton;

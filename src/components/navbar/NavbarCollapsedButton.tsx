import { useState } from 'react';
import { TiHome } from 'react-icons/ti';
import IconButton from '@material-ui/core/IconButton';

import ButtonCollapse from '@styles/components/navbar/navbarCollapsedButton';
import MobileDrawer from './MobileDrawer';

function NavbarCollapsedButton() {
  const [open, setOpen] = useState(false);

  return (
    <ButtonCollapse role="button">
      <IconButton onClick={() => setOpen(!open)}>
        <TiHome />
      </IconButton>
      <MobileDrawer open={open} onClick={() => setOpen(!open)} />
    </ButtonCollapse>
  );
}

export default NavbarCollapsedButton;

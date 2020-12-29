import { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { TiHome } from 'react-icons/ti';

import ThemeChanger from './ThemeChanger';
import MobileDrawer from './MobileDrawer';

const useStyles = makeStyles((theme) =>
  createStyles({
    buttonCollapse: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      margin: '0.7rem',
    },
  }),
);

function ButtonNavbarCollapse() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.buttonCollapse}>
      <IconButton onClick={() => setOpen(true)}>
        <TiHome />
      </IconButton>
      <ThemeChanger />
      <MobileDrawer open={open} onClick={() => setOpen(false)} />
    </div>
  );
}

export default ButtonNavbarCollapse;

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// dark
const palleteType = 'light';
const darkTheme = createMuiTheme({
  palette: {
    type: palleteType,
  },
});

export default responsiveFontSizes(darkTheme);

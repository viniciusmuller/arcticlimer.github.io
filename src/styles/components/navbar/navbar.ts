import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-grow: 1;
`;

const useStyles = makeStyles(() =>
  createStyles({
    AppBar: {
      backgroundColor: '#fcfcfc',
      color: '#000000',
    },
  }),
);

export default useStyles;

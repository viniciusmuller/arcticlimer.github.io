import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { FiSun } from 'react-icons/fi';
import { BiMoon } from 'react-icons/bi';

function ThemeChanger() {
  const [day, setDay] = useState(true);

  return (
    <IconButton onClick={() => setDay(!day)}>
      {day ? <FiSun /> : <BiMoon />}
    </IconButton>
  );
}

export default ThemeChanger;

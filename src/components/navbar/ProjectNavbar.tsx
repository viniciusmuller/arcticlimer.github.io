import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import BaseNavbar from './BaseNavbar';

function ProjectNavbar() {
  const history = useHistory();

  return (
    <BaseNavbar>
      <Button size="large" onClick={history.goBack}>
        Back
      </Button>
    </BaseNavbar>
  );
}

export default ProjectNavbar;

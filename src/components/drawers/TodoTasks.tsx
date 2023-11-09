import { Drawer } from 'arvara-pckage';

import useAuth from '../../hooks/useAuth';
import { BvnForm } from '../forms/BvnForm';
import CustomerSelfie from '../modal/CustomerSelfie';
import VerifyEmailForm from '../forms/VerifyEmailForm';
import Profile from '../../pages/account/AccountItems/Profile';
import EmploymentRecordForm from '../forms/EmploymentRecordForm';

const todoLists = {
  'email': {
    element: <VerifyEmailForm />
  },
  'bvn': {
    element: <BvnForm />
  },
  'profile': {
    element: <Profile />
  },
  'image': {
    element: <CustomerSelfie />
  },
  'employmentRecord': {
    element: <EmploymentRecordForm />
  }
}

const TodoTasks = () => {
    const drawerState = useAuth(state => state.drawerState);
  return (
    <Drawer
        position="right"
        header={drawerState.header}
        subheader={drawerState.subheader}
        open={drawerState.open && Object.keys(todoLists).includes(drawerState.type)
        }
        close={() => useAuth.setState({ drawerState: { open: false, header: '', subheader: '', type: '' } })}>
          {todoLists[drawerState.type]?.element}
      </Drawer>
  )
}

export default TodoTasks;

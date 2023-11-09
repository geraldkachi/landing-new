import { Drawer } from 'arvara-pckage';
import useAuth from '../../hooks/useAuth';
import CardSelection from '../../pages/Debitcard/CardSelection';
import RepaymentOptions from '../../pages/Dashboard/Home/board/RepaymentOptions';
import RepaymentDetails from '../../pages/Dashboard/Home/board/RepaymentDetails';

const Repayment = () => {
  const drawerState = useAuth((state) => state.drawerState);
  const drawerStepper = useAuth((state) => state.drawerStepper);
  return (
    <>
      <Drawer
        open={drawerState.open && drawerState.type === 'repayment'}
        position="right"
        header={drawerState.header}
        close={() => useAuth.setState({ drawerState: { open: false, type: '', header: '' } })}
        subheader={drawerState.subheader}>
        {drawerStepper === 'repayment' ? <RepaymentDetails /> : <RepaymentOptions />}
      </Drawer>
      <CardSelection />
    </>
  );
};

export default Repayment;

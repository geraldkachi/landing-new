import { Button } from "arvara-pckage";
import { useMutation } from 'react-query';

import { addCustomerImage } from '../../server';

const SelfieForm = () => {

  const saveImage = () => null;

  const { mutateAsync: addImage, isLoading: imgLoading } = useMutation(addCustomerImage);
  return (
    <div className="p-5">
      <Button className="w-full bg-meador" onClick={saveImage}>
        Save
      </Button>
    </div>
  );
};

export default SelfieForm;

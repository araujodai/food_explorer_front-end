import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { toastDefaultConfig } from './styles';

class Notification {
  success(message) {
    toast.success(message, toastDefaultConfig);
  };

  error(message) {
    toast.error(message, toastDefaultConfig);
  };

  info(message) {
    toast.info(message, toastDefaultConfig);
  };
};

const notify = new Notification();

export { notify };
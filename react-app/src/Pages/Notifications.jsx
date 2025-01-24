import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notifications() {
  const notify = () => toast("You have a new message!");

  return (
    <div>
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  );
}

export default Notifications;

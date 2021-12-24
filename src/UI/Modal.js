import {Fragment} from "react";
import classes from './Modal.module.css';
import ReactDOM from "react-dom";

const Modal = (props) => {
  const BackGroundDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>;
  };
  const ModalOverlay = (props) => {
      return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>);
  };

  const portalElement = document.getElementById('cart-modal');

  return <Fragment>
      {ReactDOM.createPortal(<BackGroundDrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
  </Fragment>;
};

export default Modal;

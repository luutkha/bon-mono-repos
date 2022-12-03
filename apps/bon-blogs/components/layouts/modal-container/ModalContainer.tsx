import classNames from 'classnames';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import MinusCloseIcon from '../../../public/assets/imgs/modal-container/MinusCloseIcon';
import classes from './ModalContainer.module.css';

const { modal, modalFade, modalShow, header, minusCloseIcon, content } =
  classes;
const EVENT_NAME: string[] = ['onEnter', 'onExit'];
const EMPTY_STRING = '';
export interface ModalProps {
  top?: number;
  backgroundColorHeader?: string;
  closeIconClass?: string;
  show: boolean;
  onHide: () => void;
  children?: JSX.Element | React.ReactNode | React.ReactElement
}
const ModalContainer: React.FC<ModalProps> = ({
  children,
  backgroundColorHeader,
  closeIconClass,
  top,
  show,
  onHide,
}) => {
  const [eventName, setEventName] = useState(EMPTY_STRING);

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop={true}
      bsPrefix={classNames(
        modal,
        {
          [modalFade]: eventName === EVENT_NAME[1],
        },
        {
          [modalShow]: eventName === EVENT_NAME[0],
        }
      )}
      onEnter={() => setEventName(EVENT_NAME[0])}
      onExit={() => setEventName(EVENT_NAME[1])}
      style={{ top: top }}
    >
      <Modal.Header
        bsPrefix={classNames('modal-header', header)}
        style={{ backgroundColor: backgroundColorHeader }}
      >
        <div
          onClick={onHide}
          className={classNames(minusCloseIcon, closeIconClass)}
        >
          <MinusCloseIcon />
        </div>
      </Modal.Header>
      <Modal.Body bsPrefix={classNames(content)}>{children}</Modal.Body>
    </Modal>
  );
};

ModalContainer.displayName = 'ModalContainer';

export default ModalContainer;

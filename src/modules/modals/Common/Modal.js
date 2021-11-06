import React from "react";
import PropTypes from "prop-types";
import { Text, RedText } from "../../../common";
import {
  Modal as Wrapper,
  ModalWindow,
  ModalField,
  ModalCloseButton,
  ModalTitle as Title,
  ModalInput as Input,
  ModalFormFooter,
} from "./Modal.styles";
import { createPortal } from "react-dom";

const ModalInput = (props) => (
  <ModalField>
    <RedText>{props.text}</RedText>
    <Input
      placeholder={props.placeholder}
      value={props.value}
      readonly={props.readonly}
    />
  </ModalField>
);

ModalInput.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  readonly: PropTypes.bool,
};

const ModalHeader = (props) => (
  <ModalField>
    <ModalCloseButton ref={props.closeButtonRef} onClick={props.onCloseClick}>
      <Text>X</Text>
    </ModalCloseButton>
  </ModalField>
);

ModalHeader.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  closeButtonRef: PropTypes.elementType.isRequired,
};

const ModalTitle = (props) => (
  <ModalField textAlign={props.textAlign}>
    <Title>{props.title}</Title>
  </ModalField>
);

ModalTitle.propTypes = {
  textAlign: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const Modal = (props) => {
  return createPortal(
    <Wrapper>
      <ModalWindow ref={props.modalRef}>
        <ModalHeader
          closeButtonRef={props.closeButtonRef}
          onCloseClick={props.onCloseClick}
        />
        {props.title && (
          <ModalTitle title={props.title} textAlign={props.textAlign} />
        )}
        {props.children}
      </ModalWindow>
    </Wrapper>,
    document.body
  );
};

Modal.propTypes = {
  textAlign: PropTypes.string,
  title: PropTypes.string,
};

export { Modal, ModalInput, ModalFormFooter };

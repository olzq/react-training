import React from "react";
import PropTypes from "prop-types";

import { Modal, ModalInput, ModalFormFooter } from "../Common";

import { ResetButton, SubmitButton } from "../../../common";

const AddMovieModal = (props) => (
  <Modal
    title="ADD MOVIE"
    modalRef={props.modalRef}
    closeButtonRef={props.closeButtonRef}
    onCloseClick={props.onCloseClick}
  >
    <form onSubmit={props.onSubmit}>
      <ModalInput text="TITLE" placeholder="Enter movie title" />
      <ModalInput text="RELEASE DATE" placeholder="Select Date" />
      <ModalInput text="MOVIE URL" placeholder="Movie URL here" />
      <ModalInput text="GENRE" placeholder="Select Genre" />
      <ModalInput text="OVERVIEW" placeholder="Overview here" />
      <ModalInput text="RUNTIME" placeholder="Runtime here" />
      <ModalFormFooter>
        <ResetButton type="reset">RESET</ResetButton>
        <SubmitButton type="submit">SUBMIT</SubmitButton>
      </ModalFormFooter>
    </form>
  </Modal>
);

AddMovieModal.propTypes = {
  modalRef: PropTypes.elementType.isRequired,
  closeButtonRef: PropTypes.elementType.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export { AddMovieModal };

import React from "react";
import PropTypes from "prop-types";

import { Modal, ModalFormFooter } from "../Common";

import { SubmitButton } from "../../../common";

const DeleteMovieModal = (props) => (
  <Modal
    title="DELETE MOVIE"
    modalRef={props.modalRef}
    closeButtonRef={props.closeButtonRef}
    onCloseClick={props.onCloseClick}
  >
    <form>
      Are you sure you want to delete this movie?
      <ModalFormFooter>
        <SubmitButton type="submit">Confirm</SubmitButton>
      </ModalFormFooter>
    </form>
  </Modal>
);

DeleteMovieModal.propTypes = {
  modalRef: PropTypes.elementType.isRequired,
  closeButtonRef: PropTypes.elementType.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export { DeleteMovieModal };

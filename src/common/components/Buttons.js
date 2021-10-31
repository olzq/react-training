import styled from "styled-components";
import {
  PRIMARY_RED,
  TRANSPARENT_WHITE,
  PRIMARY_DARK,
  WHITE,
} from "../../style/constants";

const Button = styled.button`
  text-align: center;
  border-radius: 0.2rem;
  border: none;
`;

const TransparentButton = styled(Button)`
  color: ${PRIMARY_RED};
  background: ${TRANSPARENT_WHITE};
`;

const ResetButton = styled(Button)`
  padding: 1em 1.5em;
  margin: 0 0.5em;
  border: 2px solid ${PRIMARY_RED};
  background: ${PRIMARY_DARK};
  color: ${WHITE};
`;

const RedButton = styled(Button)`
  color: ${WHITE};
  background-color: ${PRIMARY_RED};
`;

const SubmitButton = styled(RedButton)`
  padding: 0.8em 1.5em;
  margin: 0 0.5em;
`;

export { Button, TransparentButton, RedButton, ResetButton, SubmitButton };

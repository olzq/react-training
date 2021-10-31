import styled from "styled-components";
import { WHITE, PRIMARY_RED } from "../../style/constants";

const Text = styled.span`
  color: ${WHITE};
  font-weight: 400;
`;

const BoldText = styled.span`
  font-weight: 700;
`;

const RedText = styled.span`
  color: ${PRIMARY_RED};
`;

export { Text, RedText, BoldText };

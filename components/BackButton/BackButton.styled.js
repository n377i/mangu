import Link from "next/link";
import styled from "styled-components";

export const BackLink = styled(Link)`
  position: absolute;
  ${({ $isDefaultIcon }) =>
    !$isDefaultIcon &&
    `
      top: 55px;
    `}
`;

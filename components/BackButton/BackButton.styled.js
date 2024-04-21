import Link from "next/link";
import styled from "styled-components";

export const BackLink = styled(Link)`
  ${({ $isDefaultIcon }) =>
    !$isDefaultIcon &&
    `
      position: absolute;
      top: 55px;
    `}
`;

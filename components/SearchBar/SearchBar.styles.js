import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  padding: 0 16px;
  margin-bottom: 16px;
`;

export const SearchInput = styled.input`
  font: var(--font-body);
  color: var(--color-grey);
  background: var(--color-input);
  width: 100%;
  padding: 12px 40px 12px 12px;
  border: 1px solid var(--color-light-grey);
  border-radius: 6px;
  outline: none;
`;

export const ClearButton = styled.span`
  position: absolute;
  top: 50%;
  right: 28px;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  background: url("/assets/icon_clear.svg") no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export const Notice = styled.h2`
  font: var(--font-form-label);
  color: var(--color-night);
  padding: 0 16px;
`;

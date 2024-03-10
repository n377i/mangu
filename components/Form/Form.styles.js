import styled from "styled-components";

export const formField = {
  font: "var(--font-body)",
  color: "var(--color-grey)",
  marginBottom: "29px",
  padding: "12px",
  border: "1px solid var(--color-light-grey)",
  borderRadius: "6px",
};

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  font: var(--font-form-label);
  margin-bottom: 3px;
`;

export const Input = styled.input`
  ${formField}
`;

export const TextArea = styled.textarea`
  ${formField}
`;

export const NumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NumberButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const NumberDisplay = styled.span`
  font: var(--font-form-label);
  margin: 0 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const ButtonOutline = styled.button`
  font: var(--font-button);
  color: var(--color-orange);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 3px 0 50px;
  padding: 10px;
  background: var(--color-white);
  border: 2px solid var(--color-orange);
  border-radius: 8px;
`;

export const Button = styled.button`
  font: var(--font-button);
  color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex: 1;
  background: var(--color-gradient);
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

import styled from "styled-components";

export const formField = {
  font: "var(--font-body)",
  color: "var(--color-grey)",
  background: "var(--color-input)",
  marginBottom: "29px",
  padding: "12px",
  border: "1px solid var(--color-light-grey)",
  borderRadius: "6px",
  outline: "none",
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
  resize: none;
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

export const PreviewContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 6px;
`;

export const PreviewImage = styled.img`
  height: 298px;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const PreviewImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 298px;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: inherit;
`;

export const DeleteIcon = styled.img`
  width: 70px;
  height: 76px;
  cursor: pointer;
`;

export const UploadButton = styled.label`
  font: var(--font-button);
  color: var(--color-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 3px 0 50px;
  padding: 10px;
  background: var(--color-primary);
  border: 2px solid var(--color-secondary);
  border-radius: 8px;
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  font: var(--font-button);
  color: var(--color-primary);
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

import AddForm from "@/components/AddForm";
import FormNav from "@/components/FormNav";
import styled from "styled-components";

const FormContainer = styled.div`
  position: relative;
  top: -36px;
  padding: 45px 24px 14px;
  background: var(--color-white);
  border-radius: 40px;
  z-index: 1;
`;

export default function AddFormPage() {
  return (
    <>
      <FormNav />
      <FormContainer>
        <AddForm />
      </FormContainer>
    </>
  );
}

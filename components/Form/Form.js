import {
  FormContainer,
  Label,
  Input,
  TextArea,
  NumberContainer,
  NumberWrapper,
  NumberDisplay,
  NumberButton,
  ButtonWrapper,
  ButtonOutline,
  Button,
} from "./Form.styles";
import Link from "next/link";
import { useState } from "react";

export default function Form({ onSubmit, formName, defaultData }) {
  const [servings, setServings] = useState(defaultData?.servings || 2);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  const handleIncrement = () => {
    if (servings < 100) {
      setServings(Math.min(servings + 1, 100));
    }
  };

  const handleDecrement = () => {
    if (servings > 1) {
      setServings(servings - 1);
    }
  };

  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
      <Label htmlFor="title">Titel</Label>
      <Input
        type="text"
        id="title"
        name="title"
        defaultValue={defaultData?.title}
      />
      <NumberContainer>
        <Label htmlFor="title">Portionen</Label>
        <NumberWrapper>
          <NumberButton type="button" onClick={handleDecrement}>
            <img src="/assets/icon_minus.svg" alt="Minus" />
          </NumberButton>
          <NumberDisplay>{servings}</NumberDisplay>
          <NumberButton type="button" onClick={handleIncrement}>
            <img src="/assets/icon_plus.svg" alt="Plus" />
          </NumberButton>
        </NumberWrapper>
      </NumberContainer>
      <Label htmlFor="ingredients">Zutaten</Label>
      <TextArea
        id="ingredients"
        name="ingredients"
        defaultValue={defaultData?.ingredients}
        rows={14}
      />
      <Label htmlFor="preparation">Zubereitung</Label>
      <TextArea
        id="preparation"
        name="preparation"
        defaultValue={defaultData?.preparation}
        rows={14}
      />
      <ButtonOutline type="button" href="#">
        <img src="/assets/icon_image-upload.svg" alt="Bild hinzufügen" /> Bild
        hinzufügen
      </ButtonOutline>
      <ButtonWrapper>
        <Link href="/">
          <Button type="button">Abbrechen</Button>
        </Link>
        <Button type="submit">Speichern</Button>
      </ButtonWrapper>
    </FormContainer>
  );
}

import { useState } from "react";
import useSWR from "swr";
import {
  Form,
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
} from "@/components/Layout/FormStyles";

export default function AddForm() {
  const { mutate } = useSWR("/api/recipes");
  const [servings, setServings] = useState(2);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const recipeData = Object.fromEntries(formData);
    recipeData.servings = servings;

    const response = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    });

    if (response.ok) {
      mutate();
    }
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
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="title">Titel</Label>
      <Input type="text" id="title" name="title" />
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
      <TextArea id="ingredients" name="ingredients" rows={14} />
      <Label htmlFor="preparation">Zubereitung</Label>
      <TextArea id="preparation" name="preparation" rows={14} />
      <ButtonOutline type="button" href="#">
        <img src="/assets/icon_image-upload.svg" alt="Bild hinzufügen" /> Bild
        hinzufügen
      </ButtonOutline>
      <ButtonWrapper>
        <Button type="button" href="/">
          Abbrechen
        </Button>
        <Button type="submit">Speichern</Button>
      </ButtonWrapper>
    </Form>
  );
}

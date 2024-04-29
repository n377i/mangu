import { useState } from "react";
import { useRouter } from "next/router";
import upload from "@/utils/upload";
import {
  FormContainer,
  Label,
  Input,
  TextArea,
  NumberContainer,
  NumberWrapper,
  NumberButton,
  NumberDisplay,
  PreviewContainer,
  PreviewImage,
  Overlay,
  DeleteIcon,
  FileInput,
  UploadButton,
  ButtonWrapper,
  Button,
} from "./Form.styles";

export default function Form({ onSubmit, formName, defaultData, theme }) {
  const router = useRouter();
  const [servings, setServings] = useState(defaultData?.servings || 2);
  const [previewImage, setPreviewImage] = useState(defaultData?.image || null);
  const [title, setTitle] = useState(defaultData?.title || "");
  const [ingredients, setIngredients] = useState(
    defaultData?.ingredients || ""
  );
  const [preparation, setPreparation] = useState(
    defaultData?.preparation || ""
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setPreviewImage(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedRecipe = {
        title,
        servings,
        ingredients,
        preparation,
        image: previewImage ? await upload(previewImage) : null,
      };

      await onSubmit(updatedRecipe);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCancel = () => {
    router.back();
  };

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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <NumberContainer>
        <Label htmlFor="title">Portionen</Label>
        <NumberWrapper>
          <NumberButton type="button" onClick={handleDecrement}>
            <img
              src={
                theme === "dark"
                  ? "/assets/icon_minus_dark.svg"
                  : "/assets/icon_minus.svg"
              }
              alt="Plus"
            />
          </NumberButton>
          <NumberDisplay>{servings}</NumberDisplay>
          <NumberButton type="button" onClick={handleIncrement}>
            <img
              src={
                theme === "dark"
                  ? "/assets/icon_plus_dark.svg"
                  : "/assets/icon_plus.svg"
              }
              alt="Plus"
            />
          </NumberButton>
        </NumberWrapper>
      </NumberContainer>
      <Label htmlFor="ingredients">Zutaten</Label>
      <TextArea
        id="ingredients"
        name="ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        rows={14}
      />
      <Label htmlFor="preparation">Zubereitung</Label>
      <TextArea
        id="preparation"
        name="preparation"
        value={preparation}
        onChange={(e) => setPreparation(e.target.value)}
        rows={14}
      />
      <PreviewContainer>
        {previewImage && (
          <>
            <Overlay onClick={handleDeleteImage}>
              <DeleteIcon
                src="/assets/icon_delete_shadow.svg"
                fill="white"
                alt="Bild löschen"
              />
            </Overlay>
            <PreviewImage
              src={previewImage}
              alt={previewImage ? "Bildvorschau" : ""}
              onClick={() => document.getElementById("fileInput").click()}
            />
          </>
        )}
        <UploadButton>
          {previewImage ? (
            <>
              <img src="/assets/icon_image-upload.svg" alt="Bild ersetzen" />
              Bild ersetzen
            </>
          ) : (
            <>
              <img src="/assets/icon_image-upload.svg" alt="Bild hinzufügen" />
              Bild hinzufügen
            </>
          )}
          <FileInput
            id="fileInput"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </UploadButton>
      </PreviewContainer>
      <ButtonWrapper>
        <Button type="button" onClick={handleCancel}>
          Abbrechen
        </Button>
        <Button type="submit">Speichern</Button>
      </ButtonWrapper>
    </FormContainer>
  );
}

import { useState } from "react";
import uploadImageToCloudinary from "@/utils/cloudinary/upload-image";
import deleteImageFromCloudinary from "@/utils/cloudinary/delete-image";
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
  PreviewImageOverlay,
  DeleteIcon,
  FileInput,
  UploadButton,
  ButtonWrapper,
  Button,
} from "./Form.styles";

export default function Form({
  onSubmit,
  onClose,
  formName,
  defaultData,
  theme,
}) {
  const [servings, setServings] = useState(defaultData?.servings || 2);
  const [previewImage, setPreviewImage] = useState(defaultData?.image || null);
  const [newImageFile, setNewImageFile] = useState(null);
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
      setNewImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage({ url: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setPreviewImage(null);
    setNewImageFile(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let image;
      if (newImageFile) {
        if (previewImage && previewImage.public_id) {
          await deleteImageFromCloudinary(previewImage.public_id);
        }
        image = await uploadImageToCloudinary(newImageFile);
      } else if (previewImage && previewImage.url) {
        image = previewImage;
      }

      const updatedRecipe = {
        title,
        servings,
        ingredients,
        preparation,
      };

      if (image) {
        updatedRecipe.image = image;
      }

      await onSubmit(updatedRecipe);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCancel = () => {
    onClose();
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
        required
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
              alt="Minus"
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
        required
      />
      <Label htmlFor="preparation">Zubereitung</Label>
      <TextArea
        id="preparation"
        name="preparation"
        value={preparation}
        onChange={(e) => setPreparation(e.target.value)}
        rows={14}
        required
      />
      <PreviewContainer>
        {previewImage && (
          <>
            <PreviewImageOverlay onClick={handleDeleteImage}>
              <DeleteIcon
                src="/assets/icon_delete_shadow.svg"
                fill="white"
                alt="Bild löschen"
              />
            </PreviewImageOverlay>
            <PreviewImage
              src={previewImage ? previewImage.url : ""}
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

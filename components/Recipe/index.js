import useSWR from "swr";
import { useRouter } from "next/router";
import { Card } from "@/components/Layout/Card";
import { CenterDiv } from "@/components/Layout/CenterDiv";
import { PuffLoader } from "react-spinners";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  height: 340px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Recipe() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/recipes/${id}`);

  if (!data || isLoading) {
    return (
      <CenterDiv>
        <PuffLoader color="#fea500" />
      </CenterDiv>
    );
  }

  return (
    <>
      <ImageContainer>
        <Image src={`${data.image}`} alt={data.title} />
      </ImageContainer>
      <Card>
        <h1>{data.title}</h1>
        <h2>Zutaten</h2>
        <p>
          Für <strong>{data.servings}</strong> Portionen
        </p>
        <p>{data.ingredients}</p>
        <h2>Zubereitung</h2>
        <p>{data.preparation}</p>
      </Card>
    </>
  );
}

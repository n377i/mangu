import AddForm from "@/components/AddForm";
import FormNav from "@/components/FormNav";
import { Card } from "@/components/Layout/Card";

export default function AddFormPage() {
  return (
    <>
      <FormNav />
      <Card>
        <AddForm />
      </Card>
    </>
  );
}

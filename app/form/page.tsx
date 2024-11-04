import { Section, Container } from "@/components/craft";
import { InputForm } from "@/components/main/form";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1>Wow! a form.</h1>
        <h3 className="text-muted-foreground my-0">
          Submit the form to see the what happens.
        </h3>
        <div className="mt-4 p-6 border rounded-lg bg-accent/30">
          <InputForm />
        </div>
      </Container>
    </Section>
  );
}

import { Section, Container } from "@/components/craft";
import { InputForm } from "@/components/main/form";

export default function Page() {
  return (
    <Section>
      <Container>
        {/* Header */}
        <div className="text-center max-w-md mx-auto mb-8 flex flex-col gap-2">
          <h1 className="text-xl font-medium">Submit your information!</h1>
          <h3 className="text-muted-foreground my-0">
            Please fill out the form below to submit your information.
          </h3>
        </div>
        {/* Form */}
        <div className="mt-4 p-6 border rounded-lg bg-accent/30 max-w-md mx-auto">
          <InputForm />
        </div>
      </Container>
    </Section>
  );
}

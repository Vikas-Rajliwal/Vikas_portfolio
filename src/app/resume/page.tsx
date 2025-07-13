import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">📄</span>
      <Heading className="font-black">My Resume</Heading>
      <Paragraph className="max-w-xl mt-4">
        Here is my resume embedded directly on this page:
      </Paragraph>

      <div className="mt-6 w-full h-[80vh]">
        <iframe
          src="./Vikas_Resume.pdf"
          className="w-full h-full border rounded-md"
          title="My Resume"
        />
      </div>
    </Container>
  );
}

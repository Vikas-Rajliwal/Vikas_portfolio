import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I  am Vikas Rajliwal</Heading>
      <Paragraph className="max-w-xl mt-4">
        I am a full-stack developer passionate about <Highlight>building intelligent solutions</Highlight> and web applications that create real-world impact and inspire innovation.
      </Paragraph>

      <Paragraph className="max-w-xl mt-4">
        I'm a full-stack developer with a growing focus on <Highlight>AI-powered applications</Highlight> that are scalable, efficient, and thoughtfully crafted.
      </Paragraph>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}

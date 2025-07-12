"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
// const images = [
//   "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", // coding setup
//   "https://images.unsplash.com/photo-1628695552206-2d3c8b5a4ac8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", // public speaking
//   "https://images.unsplash.com/photo-1581092919535-0b1c3ec5cf5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", // AI brain
//   "https://images.unsplash.com/photo-1629904853893-d043a6f7fbc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", // dev desk setup
// ];




  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {/* {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))} */}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hey there, I'm Vikas Rajliwal — a full-stack developer, tech enthusiast, and passionate creator with a knack for building intelligent and impactful digital solutions.
        </Paragraph>
        <Paragraph className="mt-4">
          From coding AI-powered music recommendations based on facial emotions to crafting seamless user experiences in web applications, my journey has been all about blending logic with creativity. I specialize in technologies like React, Django, Node.js, and Python to bring ideas to life.
        </Paragraph>
        <Paragraph className="mt-4">
          Beyond development, I find joy in leading initiatives and sharing knowledge. Whether it’s organizing career-driven seminars, collaborating on tech events, or presenting ideas on stage, I believe in empowering others through technology and community engagement.
        </Paragraph>
        <Paragraph className="mt-4">
          I’m also an advocate for clean, user-focused design. Every project I take on is built with performance, accessibility, and visual finesse in mind. To me, great software doesn’t just work — it resonates with the people who use it.
        </Paragraph>
        <Paragraph className="mt-4">
          This site is where I share my projects, thoughts, and learnings from the ever-evolving world of tech. Whether you're a developer, a designer, or just someone curious about innovative solutions — there's something here for you.
        </Paragraph>
        <Paragraph className="mt-4">
          Join me as I continue to explore new technologies, contribute to the developer community, and turn code into experiences that matter.
        </Paragraph>
        <Paragraph className="mt-4">
          Thanks for stopping by — let’s build something amazing together.
        </Paragraph>
      </div>

    </div>
  );
}

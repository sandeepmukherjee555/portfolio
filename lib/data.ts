import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import test1 from "@/public/test1.jpg";
import test2 from "@/public/test2.png";
import test3 from "@/public/test3.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Test 1",
    location: "Bangalore Test 1",
    description:
      "Sandeep Mukherjee data testing front end developer Test 1.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Test 2",
    location: "Hyderabad",
    description:
      "Sandeep Mukherjee data testing front end developer Test 2.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Test 3",
    location: "Patna",
    description:
      "Sandeep Mukherjee data testing front end developer Test 3.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Development 1 test",
    description:
      "I worked as a software developer on this startup project for 1 years. Users can give public feedback to companies test 1.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: test1,
  },
  {
    title: "Development 2 test",
    description:
      "I worked as a software developer on this startup project for 2 years. Users can give public feedback to companies test 2.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: test2,
  },
  {
    title: "Development 3 test",
    description:
      "I worked as a software developer on this startup project for 3 years. Users can give public feedback to companies test 3.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: test3,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Framer Motion",
] as const;
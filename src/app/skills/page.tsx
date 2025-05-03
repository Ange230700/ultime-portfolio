// src/app/skills/page.tsx

"use client";

import { Chip } from "primereact/chip";
import {
  SiTypescript,
  SiExpress,
  SiDjango,
  SiNestjs,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import {
  FaPhp,
  FaPython,
  FaJava,
  FaReact,
  FaAngular,
  FaVuejs,
  FaSymfony,
} from "react-icons/fa";
import {
  languages,
  DXTools,
  frontFrameworks,
  backFrameworks,
  databases,
  NMTechStack,
  REMTechStack,
  VSMTechStack,
  VDPTechStack,
  ASMTechStack,
  softSkills,
} from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  TypeScript: <SiTypescript />,
  PHP: <FaPhp />,
  Python: <FaPython />,
  Java: <FaJava />,
  React: <FaReact />,
  "Next.js": <RiNextjsFill />,
  Angular: <FaAngular />,
  Vue: <FaVuejs />,
  Express: <SiExpress />,
  Symfony: <FaSymfony />,
  Django: <SiDjango />,
  NestJS: <SiNestjs />,
  "Spring Boot": <SiSpringboot />,
  MySQL: <SiMysql />,
  PostgreSQL: <SiPostgresql />,
};

type SkillItem = { label: string; icon?: string };

export default function SkillsPage() {
  const renderSkill = (skill: SkillItem | string) => {
    if (typeof skill === "string") {
      return <Chip key={skill} label={skill} />;
    }
    const customIcon = iconMap[skill.label];
    if (customIcon) {
      return (
        <Chip
          key={skill.label}
          template={
            <div className="flex items-center gap-2 py-[6px]">
              <span>{customIcon}</span>
              <span>{skill.label}</span>
            </div>
          }
        />
      );
    }
    if (skill.icon) {
      return <Chip key={skill.label} label={skill.label} icon={skill.icon} />;
    }
    return <Chip key={skill.label} label={skill.label} />;
  };

  const techStacks = [
    { label: "NM", skills: NMTechStack },
    { label: "REM", skills: REMTechStack },
    { label: "VSM", skills: VSMTechStack },
    { label: "VDP", skills: VDPTechStack },
    { label: "ASM", skills: ASMTechStack },
  ];

  return (
    <div className="flex flex-1 flex-col p-4">
      <h1 className="mb-4 text-3xl font-bold">Compétences</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Langages</h2>
        <div className="flex flex-wrap gap-4">
          {languages.map((language) => renderSkill(language))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold">
          Outils de développement (DX Tools)
        </h2>
        <div className="flex flex-wrap gap-4">
          {DXTools.map((tool) => renderSkill(tool))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Frameworks Front-end</h2>
        <div className="flex flex-wrap gap-4">
          {frontFrameworks.map((fw) => renderSkill(fw))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Frameworks Back-end</h2>
        <div className="flex flex-wrap gap-4">
          {backFrameworks.map((fw) => renderSkill(fw))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Bases de données</h2>
        <div className="flex flex-wrap gap-4">
          {databases.map((db) => renderSkill(db))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Tech Stacks</h2>
        {techStacks.map((stack) => (
          <div key={stack.label} className="mb-4">
            <h3 className="mb-2 text-lg font-semibold">{stack.label}</h3>
            <div className="flex flex-wrap gap-4">
              {stack.skills.map((skill) => renderSkill(skill))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">Compétences transversales</h2>
        <div className="flex flex-wrap gap-4">
          {softSkills.map((skill) => renderSkill(skill))}
        </div>
      </section>
    </div>
  );
}

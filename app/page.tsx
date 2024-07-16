import Image from "next/image"
import { GraduationCap, Lightbulb, UserSearch } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import Section from "@/components/section"
import {
  TypographyH3,
  TypographyLarge,
  TypographyMedium,
  TypographySmallMuted,
} from "@/components/typography"

interface SkillSectionProps {
  title: string
  skills: string[]
}

function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <TypographyLarge className="text-muted-foreground font-mono">
        {title}
      </TypographyLarge>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge variant="outline" className="font-mono" key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <section className="flex flex-col space-y-10">
      <Section
        title="About me"
        icon={<UserSearch className="text-muted-foreground" />}
      >
        <TypographySmallMuted className="font-mono mb-0">
          I'm a Full Stack Engineer with 5 years of experience, specializing in
          .NET and Vue.js for web development. I also develop mobile apps using
          React Native and Expo. I have a knack for configuring GitLab CI/CD
          pipelines, ensuring efficient deployments. With experience in team
          leading, I enjoy collaborating and guiding projects to success. My
          passion for exploring new technologies drives me to continuously
          enhance my skills and stay at the forefront of industry trends.
        </TypographySmallMuted>
      </Section>

      <Section
        title="Education"
        icon={<GraduationCap className="text-muted-foreground" />}
      >
        <div className="flex flex-row justify-between">
          <TypographyLarge>Collegium Da Vinci</TypographyLarge>
          <TypographyLarge className="text-muted-foreground font-normal font-mono">
            2019-2023
          </TypographyLarge>
        </div>

        <TypographyMedium className="font-mono font-normal text-muted-foreground">
          Bachelor's Degree in Computer Science
        </TypographyMedium>
      </Section>

      <Section
        title="Skills"
        icon={<Lightbulb className="text-muted-foreground" />}
      >
        <div className="flex flex-col gap-y-6">
          <SkillSection
            title="Backend"
            skills={[
              "ASP.NET Core",
              "Entity Framework Core",
              "MediatR",
              "MassTransit",
              "Polly",
              "Refit",
              "NLog",
            ]}
          />

          <SkillSection
            title="Frontend"
            skills={[
              "Vue.js / Nuxt",
              "React / Next",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
              "Bootstrap",
              "TanStack Query",
              "shadcn/ui",
            ]}
          />

          <SkillSection
            title="Mobile"
            skills={["React Native", "Expo", "Notifications", "Tamagui"]}
          />

          <SkillSection
            title="Other"
            skills={["Gitlab CI/CD", "Docker", "Linux", "REST / SOAP"]}
          />
        </div>
      </Section>
    </section>
  )
}

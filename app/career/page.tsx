import Image from "next/image"
import RESUME_DATA from "@/data/cv-data"
import { GraduationCap, ScrollText } from "lucide-react"

import Section from "@/components/section"
import Timeline from "@/components/timeline"
import { TypographyLarge, TypographyMedium } from "@/components/typography"

export default function Contact() {
  return (
    <Section
      title="Work experience"
      icon={<ScrollText className="text-muted-foreground" />}
    >
      <div className="p-2">
        <Timeline
          items={RESUME_DATA.workExperience.map((x) => {
            return {
              title: x.company,
              subtitle: x.position,
              time: x.time,
              descriptionList: x.duties,
              current: x.current,
            }
          })}
        />
      </div>
    </Section>
  )
}

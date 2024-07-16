import Image from "next/image"
import { GraduationCap, ScrollText } from "lucide-react"

import Section from "@/components/section"
import { TypographyLarge, TypographyMedium } from "@/components/typography"

export default function Contact() {
  return (
    <Section
      title="Work experience"
      icon={<ScrollText className="text-muted-foreground" />}
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
  )
}

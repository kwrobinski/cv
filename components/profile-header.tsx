import Image from "next/image"
import { Github, Globe, Linkedin, Mail } from "lucide-react"

import SocialIcon from "./social-icon"
import { TypographyH3, TypographySmallMuted } from "./typography"

export default function ProfileHeader() {
  return (
    <section className="flex items-center justify-between gap-10 pb-3 border-b-4 border-dotted">
      <div className="flex flex-col flex-grow gap-y-1">
        <TypographyH3 className="font-bold">Kacper Wróbiński</TypographyH3>
        <TypographySmallMuted className="font-mono">
          Dedicated Full Stack Engineer with a keen eye for detail, focused on
          delivering high-quality products. Committed to developing seamless and
          efficient applications that meet user needs.
        </TypographySmallMuted>

        <div className="flex items-center gap-x-1.5">
          <Globe size={14} className="text-muted-foreground" />
          <TypographySmallMuted className="font-mono text-xs">
            Poznań, Poland
          </TypographySmallMuted>
        </div>

        <div className="flex items-center gap-x-3">
          <SocialIcon type="mail" />
          <SocialIcon type="linkedin" />
          <SocialIcon type="github" />
        </div>
      </div>

      <div className="w-64 overflow-hidden rounded-xl">
        <Image
          src="https://i.pravatar.cc/400"
          alt="Kacper Wróbiński"
          width={400}
          height={400}
        />
      </div>
    </section>
  )
}

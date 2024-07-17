import Image from "next/image"
import Link from "next/link"
import RESUME_DATA from "@/data/cv-data"
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

        <Link href={RESUME_DATA.location.url} target="_blank">
          <TypographySmallMuted className="inline-flex font-mono text-xs hover:underline items-center gap-x-1">
            <Globe size={14} className="text-muted-foreground" />
            Poznań, Poland
          </TypographySmallMuted>
        </Link>

        <div className="flex items-center gap-x-3">
          <SocialIcon
            icon={Mail}
            href={RESUME_DATA.urls.mail}
            ariaLabel="Email Kacper Wróbiński"
          />
          <SocialIcon
            icon={Linkedin}
            href={RESUME_DATA.urls.linkedin}
            ariaLabel="Kacper Wróbiński's LinkedIn profile"
            externalHref
          />
          <SocialIcon
            icon={Github}
            href={RESUME_DATA.urls.github}
            ariaLabel="Kacper Wróbiński's GitHub profile"
            externalHref
          />
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

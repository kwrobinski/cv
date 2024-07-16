import { Github, Linkedin, Mail } from "lucide-react"

import { Button } from "./ui/button"

interface SocialIconProps {
  type: "github" | "linkedin" | "mail"
}

export default function SocialIcon({ type }: SocialIconProps) {
  return (
    <Button className="h-8 w-8" variant="outline" size="icon">
      {type === "github" && (
        <Github size={18} className="text-muted-foreground" />
      )}
      {type === "linkedin" && (
        <Linkedin size={18} className="text-muted-foreground" />
      )}
      {type === "mail" && <Mail size={18} className="text-muted-foreground" />}
    </Button>
  )
}

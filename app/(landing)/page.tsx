import { LandibgHero } from "@/components/landing-hero"
import { LandingNavbar } from "@/components/landing-navbar"

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandibgHero />
    </div>
  )
}

export default LandingPage
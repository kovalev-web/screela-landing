import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { PainPoint } from "@/components/sections/pain-point"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Features } from "@/components/sections/features"
import { WhoItsFor } from "@/components/sections/who-its-for"
import { Comparison } from "@/components/sections/comparison"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoint />
        <HowItWorks />
        <Features />
        <WhoItsFor />
        <Comparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

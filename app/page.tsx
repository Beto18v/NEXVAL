import { WhatsappFloat } from "@/components/ui/whatsapp-float";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Contact } from "@/components/sections/contact";
import { Examples } from "@/components/sections/examples";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Banner } from "@/components/ui/banner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-background font-sans text-foreground">
      <Banner />
      <Header />
      <Hero />
      <Services />
      <Process />
      <Examples />
      <Pricing />
      <Faq />
      <Contact />
      <WhatsappFloat />
      <Footer />
    </div>
  );
}

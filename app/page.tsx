import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solution from "@/components/Solution";
import Products from "@/components/Products";
import WorkplaceSafety from "@/components/WorkplaceSafety";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Specs from "@/components/Specs";
import FAQ from "@/components/FAQ";
import PricingAvailability from "@/components/PricingAvailability";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";
import { getInventory } from "@/lib/inventory";

export default function Home() {
  const inventory = getInventory();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solution />
        <Products inventory={inventory} />
        <WorkplaceSafety />
        <UseCases />
        <HowItWorks />
        <Specs inventory={inventory} />
        <FAQ />
        <PricingAvailability inventory={inventory} />
        <InquiryForm inventory={inventory} />
      </main>
      <Footer />
    </>
  );
}

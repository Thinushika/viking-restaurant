import Head from "next/head";
import Hero from "../components/home_components/Hero/Hero";
import CheckAvailability from "@/components/home_components/check_availability/CheckAvailability";
import ContactDetails from "@/components/home_components/contact_details";


export default function Home() {
  return (
    <>
      <Head>
        <title>Orion Ux labs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container-fluid p-0 m-0">
        <Hero/>
        <CheckAvailability />
        <ContactDetails />
        </div>
      </main>
    </>
  );
}

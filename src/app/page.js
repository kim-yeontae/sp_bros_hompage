import Image from "next/image";
import { IntroSection } from "@/components/custom/intro-section";
import { Members } from "@/components/custom/members";
import { Projects } from "@/components/custom/projects";
import { Contacts } from "@/components/custom/contacts";
import { Footer } from "@/components/custom/footer";

export default function Page() {
    return (
        <>
            <IntroSection />
            <Members />
            <Projects />
            <Contacts />
            <Footer />
        </>
    );
}

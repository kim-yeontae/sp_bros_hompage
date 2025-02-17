"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Header } from "@/components/custom/header";
import { IntroSection } from "@/components/custom/intro-section";
import { Members } from "@/components/custom/members";
import { Projects } from "@/components/custom/projects";
import { Contacts } from "@/components/custom/contacts";
import { Footer } from "@/components/custom/footer";
gsap.registerPlugin(ScrollTrigger);
export default function Page() {
    const [activeSection, setActiveSecion] = useState("intro");
    useEffect(() => {
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });
    }, []);

    return (
        <>
            <Header
                activeSection={activeSection}
                setActiveSecion={setActiveSecion}
            />
            <div className="w-full overflow-hidden">
                <IntroSection setActiveSection={setActiveSecion} />
                <Members setActiveSection={setActiveSecion} />
                <Projects setActiveSection={setActiveSecion} />
                <Contacts />
                <Footer />
            </div>
        </>
    );
}

"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

export const IntroSection = ({ setActiveSection }) => {
    const sectionRef = useRef();
    useEffect(() => {
        if (sectionRef.current) {
            gsap.to(".section-title", { opacity: 1, y: 0 });
            gsap.to(".section-subTitle", { opacity: 1, y: 0, delay: 0.2 });
            gsap.to(".section-contents", { opacity: 1, x: 0 });
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);
    // 스크롤 이벤트 핸들러
    const handleScroll = (e) => {
        if (
            sectionRef.current.offsetTop - 120 < window.scrollY &&
            window.scrollY <
                sectionRef.current.offsetTop +
                    sectionRef.current.offsetHeight -
                    120
        ) {
            setActiveSection(sectionRef.current.id);
        }
    };
    return (
        <div
            className="w-full py-10 lg:py-20 intro-section "
            id="intro"
            ref={sectionRef}
        >
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 items-center px-5 md:grid-cols-2 md:px-0">
                    <div className="flex gap-4 flex-col">
                        <div>
                            <Badge variant="outline">Welcome</Badge>
                        </div>
                        <div className="flex gap-4 flex-col">
                            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular section-title opacity-0 translate-y-full">
                                Welcome to <br /> SP Bros !!!
                            </h1>
                            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left section-subTitle opacity-0 translate-y-full">
                                스페셜한 프로젝트를 사랑하는 형제들입니다.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 section-contents opacity-0 translate-x-full">
                        <div className="bg-muted rounded-md aspect-square"></div>
                        <div className="bg-muted rounded-md row-span-2"></div>
                        <div className="bg-muted rounded-md aspect-square"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

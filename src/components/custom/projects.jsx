"use client";

import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
gsap.registerPlugin(ScrollTrigger);
export const Projects = ({ setActiveSection }) => {
    const sectionRef = useRef();
    const [isView, setIsView] = useState(false);
    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(
                ".project-section",
                {
                    y: 500,
                },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: sectionRef.current, // 트리거 요소는 .project-section
                        start: "0% 70%", // 트리거의 top이 뷰포트의 80%에 도달할 때 애니메이션 시작
                        // 트리거의 bottom이 뷰포트의 20%에 도달할 때 애니메이션 종료
                    },
                }
            );
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
            id="project"
            className="w-full py-10 lg:py-20 px-5 opacity-0   project-section"
            ref={sectionRef}
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-4 flex-col items-start">
                        <div>
                            <Badge>Project</Badge>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                                Our Project
                            </h2>
                            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                                우리의 프로젝트를 소개합니다.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
                            {/* <User className="w-8 h-8 stroke-1" /> */}
                            <div className="flex flex-col">
                                <h3 className="text-xl tracking-tight">
                                    Pay supplier invoices
                                </h3>
                                <p className="text-muted-foreground max-w-xs text-base">
                                    Our goal is to streamline SMB trade, making
                                    it easier and faster than ever.
                                </p>
                            </div>
                        </div>
                        <div className="bg-muted rounded-md  aspect-square p-6 flex justify-between flex-col">
                            {/* <User className="w-8 h-8 stroke-1" /> */}
                            <div className="flex flex-col">
                                <h3 className="text-xl tracking-tight">
                                    Pay supplier invoices
                                </h3>
                                <p className="text-muted-foreground max-w-xs text-base">
                                    Our goal is to streamline SMB trade, making
                                    it easier and faster than ever.
                                </p>
                            </div>
                        </div>

                        <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
                            {/* <User className="w-8 h-8 stroke-1" /> */}
                            <div className="flex flex-col">
                                <h3 className="text-xl tracking-tight">
                                    Pay supplier invoices
                                </h3>
                                <p className="text-muted-foreground max-w-xs text-base">
                                    Our goal is to streamline SMB trade, making
                                    it easier and faster than ever.
                                </p>
                            </div>
                        </div>
                        <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
                            {/* <User className="w-8 h-8 stroke-1" /> */}
                            <div className="flex flex-col">
                                <h3 className="text-xl tracking-tight">
                                    Pay supplier invoices
                                </h3>
                                <p className="text-muted-foreground max-w-xs text-base">
                                    Our goal is to streamline SMB trade, making
                                    it easier and faster than ever.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

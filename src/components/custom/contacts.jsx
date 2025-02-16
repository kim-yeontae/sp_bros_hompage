"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Contacts = ({ setActiveSection }) => {
    const sectionRef = useRef();
    const [isView, setIsView] = useState(false);
    useEffect(() => {
        if (sectionRef.current) {
            ScrollTrigger.create({
                start: 0,
                end: "max",

                onUpdate: () => {
                    setIsView(ScrollTrigger.isInViewport(sectionRef.current));
                },
            });
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);
    useEffect(() => {
        if (isView) {
            gsap.to(".contact-section .contens-warp", { opacity: 1, y: 0 });
        }
    }, [isView]);
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
            id="contact"
            className="w-full py-10 lg:py-20 bg-muted contact-section overflow-hidden"
            ref={sectionRef}
        >
            <div className="contens-warp container mx-auto  opacity-0 translate-y-[500px]">
                <div className="flex flex-col text-center gap-4 items-center">
                    <div>
                        <Badge>Contact</Badge>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                            Contact us
                        </h3>
                        <p className="text-2xl font-medium leading-relaxed tracking-tight text-muted-foreground max-w-xl py-4">
                            Ready to Work Together?
                        </p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Button variant="outline">
                            <a href="#" className="flex gap-4">
                                메일로 문의 <Mail className="w-4 h-4" />
                            </a>
                        </Button>
                        <Button className="gap-4">
                            오픈채팅 <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

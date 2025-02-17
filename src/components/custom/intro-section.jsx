"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export const IntroSection = ({ setActiveSection }) => {
    const sectionRef = useRef();
    useGSAP(() => {
        gsap.to(".section-title", { opacity: 1, y: 0 });
        gsap.to(".section-subTitle", { opacity: 1, y: 0, delay: 0.2 });
        gsap.to(".section-contents", { opacity: 1, x: 0 });
    });
    useEffect(() => {
        if (sectionRef.current) {
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
    //클릭 핸들러
    const clickHandler = (id) => {
        window.scrollTo({
            top: document.getElementById(id).offsetTop - 20,
            behavior: "smooth",
        });
    };
    return (
        <div
            className="w-full py-10 lg:py-20 intro-section bg-foreground"
            id="intro"
            ref={sectionRef}
        >
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 items-center px-5 md:grid-cols-2 md:px-0">
                    <div className="flex gap-4 flex-col">
                        <div>
                            <Badge
                                variant="outline"
                                className={"text-[#fefefe]"}
                            >
                                Welcome
                            </Badge>
                        </div>
                        <div className="flex gap-4 flex-col">
                            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular section-title opacity-0 translate-y-full text-[#fefefe]">
                                Welcome to <br /> SP Bros
                            </h1>
                            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left section-subTitle opacity-0 translate-y-full text-[#fefefe]">
                                여려분의 프로젝트를 말해주세요 !!!
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 section-contents opacity-0 translate-x-full">
                        <div className="bg-muted rounded-md aspect-square flex items-end justify-end pb-5 pr-5">
                            <Button
                                type="button"
                                onClick={() => {
                                    clickHandler("member");
                                }}
                            >
                                프로젝트 보기
                            </Button>
                        </div>
                        <div className=" rounded-md row-span-2 flex items-end justify-end relative overflow-hidden">
                            <Image
                                width={200}
                                height={200}
                                className={
                                    "w-full h-full object-cover blur-[1px]"
                                }
                                alt="person_1"
                                src={
                                    "https://i.pinimg.com/236x/80/55/7e/80557ed74c39c2604b338b5a0d4d0ec1.jpg"
                                }
                            />
                            <Button
                                type="button"
                                className={"absolute bottom-5 right-5"}
                                onClick={() => {
                                    clickHandler("member");
                                }}
                            >
                                멤버 보기
                            </Button>
                        </div>
                        <div className="bg-muted rounded-md aspect-square flex items-end justify-end pb-5 pr-5">
                            <Button
                                type="button"
                                onClick={() => {
                                    clickHandler("contact");
                                }}
                            >
                                문의하기
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

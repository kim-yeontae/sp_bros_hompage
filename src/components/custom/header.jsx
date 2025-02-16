"use client";

import { Button } from "@/components/ui/button";
import { Menu, MoveRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export const Header = ({ activeSection }) => {
    const [isScroll, setIsScroll] = useState(false);
    const [active, setActive] = useState("intro");
    useEffect(() => {
        setActive(activeSection);
    }, [activeSection]);
    // 스크롤 이벤트 핸들러
    const handleScroll = (e) => {
        if (window.scrollY > 50) {
            // 스크롤 위치가 50px 이상이면 true
            setIsScroll(true);
        } else {
            setIsScroll(false); // 아니면 false
        }
    };

    useEffect(() => {
        if (window.scrollY > 0) {
            setIsScroll(true);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const clickHandler = (id) => {
        window.scrollTo({
            top: document.getElementById(id).offsetTop - 20,
            behavior: "smooth",
        });
    };
    return (
        <header className={`w-full z-40 bg-background ${isScroll ? "" : ""}`}>
            <div
                className={`container px-5 md:px-0 mx-auto min-h-20 flex gap-4 flex-row lg:flex justify-between  items-center ${
                    isScroll
                        ? "md:justify-center fixed top-0 left-0 right-0 z-10 bg-white md:bg-white/[0]"
                        : "justify-between"
                }`}
            >
                <div
                    className={`justify-start items-center gap-4  flex-row font-bold text-lg md:pl-5  ${
                        isScroll ? "md:hidden" : "lg:flex"
                    }`}
                >
                    SP Bros
                </div>
                <div
                    className={`flex lg:justify-center  ${isScroll ? "" : ""}`}
                >
                    <ul
                        className={`font-semiboldt text-xs xs:text-sm md:text-base hidden  md:flex ${
                            isScroll
                                ? "bg-black/[0.3] backdrop-blur-[25px] rounded-3xl py-2 md:py-3 px-3 md:px-5 text-white"
                                : ""
                        }`}
                    >
                        <li className="relative after:content-[''] after:absolute after:top-0 after:w-[1px] after:right-0 after:h-full after:bg-[#ddd]">
                            <button
                                type="button"
                                className={` flex  px-4 ${
                                    active === "intro" ? "text-black" : ""
                                }`}
                                onClick={() => {
                                    clickHandler("intro");
                                }}
                            >
                                INTRO
                            </button>
                        </li>
                        <li className="border-r border-[#ddd]">
                            <button
                                type="button"
                                className={` flex  px-4 ${
                                    active === "member" ? "text-black" : ""
                                }`}
                                onClick={(e) => {
                                    clickHandler("member");
                                }}
                            >
                                BROS
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className={` flex  px-4 ${
                                    active === "project" ? "text-black" : ""
                                }`}
                                onClick={() => {
                                    clickHandler("project");
                                }}
                            >
                                PROJECT
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="flex md:hidden w-12 shrink lg:hidden items-end justify-end">
                    <Button
                        type="button"
                        onClick={() => {
                            clickHandler("contact");
                        }}
                    >
                        문의
                    </Button>
                </div>
            </div>
        </header>
    );
};

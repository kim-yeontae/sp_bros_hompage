import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const img_url = "@/images/person.jpeg";

export const Members = () => (
    <div className="w-full py-10 lg:py-20 px-5">
        <div className="container mx-auto">
            <div className="flex text-center justify-center items-center gap-4 flex-col">
                <Badge>Bros</Badge>
                <div className="flex gap-2 flex-col">
                    <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                        Bros
                    </h2>
                    <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                        우리팀원을 소개합니다.
                    </p>
                </div>
                <div className="grid pt-10 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
                    <Card className="w-full shadow-2xl rounded-md">
                        <CardHeader>
                            <CardTitle>
                                <span className="text-4xl">Developer</span>
                            </CardTitle>
                            <CardDescription>Full-stack</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-8 justify-start">
                                <Image
                                    width={200}
                                    height={200}
                                    className={"w-full"}
                                    alt="person_1"
                                    src={
                                        "https://i.pinimg.com/474x/d2/c1/29/d2c1295333c078b20f99fb28a420f5ce.jpg"
                                    }
                                />
                                <div className="flex flex-col gap-4 justify-start">
                                    <div className="flex flex-row gap-4">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <p>MySql</p>
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <p>Express</p>
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <p>Python</p>
                                    </div>
                                </div>
                                {/* <Button className="gap-4">
                                    Sign up today{" "}
                                    <MoveRight className="w-4 h-4" />
                                </Button> */}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="w-full shadow-2xl rounded-md">
                        <CardHeader>
                            <CardTitle>
                                <span className="text-4xl">Developer</span>
                            </CardTitle>
                            <CardDescription>Front-end</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-8 justify-start">
                                <Image
                                    width={200}
                                    height={200}
                                    className={"w-full"}
                                    alt="person_1"
                                    src={
                                        "https://i.pinimg.com/474x/d2/c1/29/d2c1295333c078b20f99fb28a420f5ce.jpg"
                                    }
                                />
                                <div className="flex flex-col gap-4 justify-start">
                                    <div className="flex flex-row gap-4">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <p>React</p>
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <p>Vanilla JS</p>
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <p>jQuery</p>
                                    </div>
                                </div>
                                {/* <Button className="gap-4">
                                    Sign up today{" "}
                                    <MoveRight className="w-4 h-4" />
                                </Button> */}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="w-full shadow-2xl rounded-md">
                        <CardHeader>
                            <CardTitle>
                                <span className="text-4xl">Designer</span>
                            </CardTitle>
                            <CardDescription>Web-designer</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-8 justify-start">
                                <Image
                                    width={200}
                                    height={200}
                                    className={"w-full"}
                                    alt="person_1"
                                    src={
                                        "https://i.pinimg.com/474x/d2/c1/29/d2c1295333c078b20f99fb28a420f5ce.jpg"
                                    }
                                />
                                <div className="flex flex-col gap-4 justify-start">
                                    <div className="flex flex-row gap-4">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <p>Figma</p>
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <p>Photoshop</p>
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <p>Illustrator</p>
                                    </div>
                                </div>
                                {/* <Button className="gap-4">
                                    Sign up today{" "}
                                    <MoveRight className="w-4 h-4" />
                                </Button> */}
                            </div>
                        </CardContent>
                    </Card>

                    {/* <Card className="w-full shadow-2xl rounded-md">
                        <CardHeader>
                            <CardTitle>
                                <span className="flex flex-row gap-4 items-center font-normal">
                                    Growth
                                </span>
                            </CardTitle>
                            <CardDescription>
                                Our goal is to streamline SMB trade, making it
                                easier and faster than ever for everyone and
                                everywhere.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-8 justify-start">
                                <p className="flex flex-row  items-center gap-2 text-xl">
                                    <span className="text-4xl">$40</span>
                                    <span className="text-sm text-muted-foreground">
                                        {" "}
                                        / month
                                    </span>
                                </p>
                                <div className="flex flex-col gap-4 justify-start">
                                    <div className="flex flex-row gap-4">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <div className="flex flex-col">
                                            <p>Fast and reliable</p>
                                            <p className="text-muted-foreground text-sm">
                                                We&apos;ve made it fast and
                                                reliable.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <div className="flex flex-col">
                                            <p>Fast and reliable</p>
                                            <p className="text-muted-foreground text-sm">
                                                We&apos;ve made it fast and
                                                reliable.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <div className="flex flex-col">
                                            <p>Fast and reliable</p>
                                            <p className="text-muted-foreground text-sm">
                                                We&apos;ve made it fast and
                                                reliable.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Button className="gap-4">
                                    Sign up today{" "}
                                    <MoveRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card> */}
                </div>
            </div>
        </div>
    </div>
);

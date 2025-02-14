import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const IntroSection = () => (
    <div className="w-full py-10 lg:py-20">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 items-center px-5 md:grid-cols-2 md:px-0">
                <div className="flex gap-4 flex-col">
                    <div>
                        <Badge variant="outline">We&apos;re live!</Badge>
                    </div>
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                            Welcome to SP Bros !!!
                        </h1>
                        <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                            스페셜한 프로젝트를 사랑하는 형제들입니다.
                        </p>
                    </div>
                    {/* <div className="flex flex-row gap-4">
                        <Button size="lg" className="gap-4" variant="outline">
                            Jump on a call <PhoneCall className="w-4 h-4" />
                        </Button>
                        <Button size="lg" className="gap-4">
                            Sign up here <MoveRight className="w-4 h-4" />
                        </Button>
                    </div> */}
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-muted rounded-md aspect-square"></div>
                    <div className="bg-muted rounded-md row-span-2"></div>
                    <div className="bg-muted rounded-md aspect-square"></div>
                </div>
            </div>
        </div>
    </div>
);

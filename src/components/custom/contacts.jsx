import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Contacts = () => (
    <div className="w-full py-10 lg:py-20 bg-muted">
        <div className="container mx-auto">
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
                    <Button className="gap-4" variant="outline">
                        메일로 문의 <PhoneCall className="w-4 h-4" />
                    </Button>
                    <Button className="gap-4">
                        오픈채팅 <MoveRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

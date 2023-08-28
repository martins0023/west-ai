import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useProModal } from "@/hooks/use-pro-modal"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Check, CodeIcon, ImageIcon, MessageSquare, MusicIcon, VideoIcon, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";



const tools = [
    {
      label: "Conversation",
      icon: MessageSquare,
      color: "text-violet-500",
      bgcolor: "bg-violet-500/10",
    },
    {
      label: "Music Generation",
      icon: MusicIcon,
      color: "text-emerald-500",
      bgcolor: "bg-emerald-500/10",
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      color: "text-pink-700",
      bgcolor: "bg-pink-700/10",
    },
    {
      label: "Video Generation",
      icon: VideoIcon,
      color: "text-orange-700",
      bgcolor: "bg-orange-700/10",
    },
    {
      label: "Code Generation",
      icon: CodeIcon,
      color: "text-green-700",
      bgcolor: "bg-green-700/10",
    },
  ]


export const ProModal = () => {
    const proModal = useProModal();
    const [loading, setLoading] = useState(false);

    const onSubscribe = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url;
        } catch (error) {
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="
                        flex 
                        justify-center 
                        items-center
                        flex-col
                        gap-y-4
                        pb-2">
                            <div className="flex items-center gap-x-2 font-bold py-1">
                                Upgrade to West 
                                <Badge variant="premium" className="uppercase text-sm py-1">
                                    Premium
                                </Badge>
                            </div>
                            <div className="font-light">
                                to continue
                            </div>
                        </DialogTitle>
                        <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                            {tools.map((tools) => (
                                <Card 
                                    key={tools.label}
                                    className="
                                        p-3 
                                        border-black/5 
                                        flex 
                                        items-center 
                                        justify-between"
                                >
                                    <div className="
                                        flex
                                        items-center
                                        gap-x-4">
                                            <div className={cn("p-2 w-fit rounded-md", tools.bgcolor)}>
                                                <tools.icon className={cn("w-6 h-6", tools.color)} />
                                            </div>
                                            <div className="font-semibold text-sm">
                                                {tools.label}
                                            </div>
                                        </div>
                                    <Check className="text-primary w-5 h-5" />
                                </Card>
                            ))}
                        </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        disabled={loading}
                        onClick={onSubscribe}
                        size="lg"
                        variant="premium"
                        className="w-full"
                    >
                        Upgrade 
                        <Zap className="w-4 h-4 ml-2 fill-white" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
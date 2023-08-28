"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("a43ab2d5-0d31-4b1e-a33f-389d1a5aa34b");
    }, []);

    return null;
}
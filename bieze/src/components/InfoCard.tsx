"use client";

import { Image } from "@nextui-org/react";
import React from "react";


export function InfoCard() {
    return (
        <div>
           <Image 
            src="https://metrics.lecoq.io/Bieze?template=classic&amp;base=header%2C%20activity%2C%20community%2C%20repositories%2C%20metadata&amp;base.indepth=false&amp;base.hireable=false&amp;base.skip=false&amp;config.timezone=Africa%2FCairo" alt="Metrics" />
        </div>
    )
}
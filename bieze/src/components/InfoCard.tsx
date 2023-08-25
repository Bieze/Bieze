"use client";

import { Image } from "@nextui-org/react";
import React from "react";


export function InfoCard() {
    return (
        <div>
           <Image 
            src="https://metrics.lecoq.io/Bieze?template=classic&amp;languages=1&amp;base=header%2C%20activity%2C%20community%2C%20repositories%2C%20metadata&amp;base.indepth=false&amp;base.hireable=false&amp;base.skip=false&amp;languages=false&amp;languages.limit=8&amp;languages.threshold=0%25&amp;languages.other=false&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=true&amp;languages.analysis.timeout=15&amp;languages.analysis.timeout.repositories=7.5&amp;languages.categories=markup%2C%20programming&amp;languages.recent.categories=markup%2C%20programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;config.timezone=Africa%2FCairo" alt="Metrics" />
        </div>
    )
}
import { randomInt } from "crypto";
import { useEffect, useState } from "react";
import useChaoticValue from "./useChaoticValue";

export interface ChaosGridItemProps {
    columnCount: number;
    index: number;
}

function ChaosGridItem(props: ChaosGridItemProps) {
    const { columnCount, index } = props;
    const chaos = useChaoticValue(columnCount);
    var classRes = "";
    switch (chaos) {
        case 1:
            classRes = "col-span-1 bg-sky-400";
            break;
        case 2:
            classRes = "col-span-2 bg-sky-500";
            break;
        case 3:
            classRes = "col-span-3 bg-indigo-400";
            break;
        case 4:
            classRes = "col-span-4 bg-indigo-500";
            break;
    }

    return (
        <div className={`${classRes} flex items-center justify-center rounded`}>
            <span className="text-lg">{index}</span>

        </div>
    )
}

export default ChaosGridItem;
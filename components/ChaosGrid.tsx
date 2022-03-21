import { randomInt } from "crypto";
import { useEffect, useState } from "react";
import ChaosGridItem, { ChaosGridItemProps } from "./ChaosGridItem";

function ChaosGrid() {
    const columnCount = 4;
    const rowCount = 4;
    var gridItems = new Array<ChaosGridItemProps>();
    const maxItems = columnCount * rowCount;
    for (var i = 0; i < maxItems; i++) {
        gridItems.push({
            index: i,
            columnCount: columnCount
        });
    }
    return (
        <div className="grid grid-flow-row-dense grid-cols-8 gap-4 w-5/6 h-5/6 bg-indigo-800 p-12">
            {
                gridItems.map((item) => {
                    return (
                        <ChaosGridItem columnCount={columnCount} index={item.index} />
                    )
                })
            }
        </div>
    )
}

export default ChaosGrid;
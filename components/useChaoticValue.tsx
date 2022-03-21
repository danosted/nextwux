import { useEffect, useState } from "react";

function useChaoticValue(maxNumber: number) {
    const getRandomNumber = () => {
        const res = Math.round(Math.random() * maxNumber);
        return res === 0 ? 1 : res;
    }

    const [chaosValue, setChaosValue] = useState(getRandomNumber());

    useEffect(() => {
        setChaosValue(getRandomNumber());
    }, [maxNumber]);
    return chaosValue;
}

export default useChaoticValue;
import React, { useState, useEffect } from "react";

export function useFollowPointer(ref) {
    const [point, setPoint] = useState({ x: 0, y: 0 });
    useEffect(() => {
        if (!ref.current)
            return
        const handlePointerMove = ({ clientX, clientY }) => {
            const element = ref.current
            const x = clientX - element.offsetLeft - element.offsetWidth / 1;
            const y = clientY - element.offsetTop - element.offsetHeight / 1;
            setPoint({ x, y })
        };
        window.addEventListener("pointermove", handlePointerMove);
        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, [])
    return point
}
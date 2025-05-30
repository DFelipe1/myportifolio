import { useKBar } from "kbar";
import { useEffect, useState } from "react";
import { Button } from "./Button";

export function ShortcutHome() {
    const { query } = useKBar();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(mounted){
        const isMac = /(Mac)/i.test(navigator.userAgent)
        const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)
        if (isMobile) {
            return (
                <Button onClick={() => query.toggle()}>
                Tap to start →
                </Button>
            )
            } else if (isMac) {
            return (
                <Button  onClick={() => query.toggle()}>
                Press <kbd>⌘</kbd> + <kbd>K</kbd> to start →
                </Button>
            )
            } else {
            return (
                <Button onClick={() => query.toggle()}>
                Press <kbd>ctrl</kbd> + <kbd>K</kbd> to start →
                </Button>
            )
            }
        
    }
    return <div />
}
import { RocketLaunch } from "@phosphor-icons/react";

export function Loading() {
    return(
        <div className="w-full h-[500px] flex items-center justify-center">
            <RocketLaunch size={64} weight='fill' className='text-LightGreen animate-loading'/>
        </div>
    )
}
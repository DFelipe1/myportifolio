import * as HoverCard from '@radix-ui/react-hover-card';

export function Techs({ tech }) {
 return (
    <HoverCard.Root openDelay={100} closeDelay={200}>
            <HoverCard.Trigger asChild>
                <div className="w-8 h-8 ">
                    <img className='object-cover' src={`https://cdn.simpleicons.org/${tech}/FF79C6`} alt="" />
                </div>
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content
                    className="w-fit rounded-md bg-DarkPurple border border-PersianPink p-3 data-[state=open]:transition-all"
                >
                    <span className="text-base text-Text">{tech}</span>
                    <HoverCard.Arrow />
                </HoverCard.Content>
            </HoverCard.Portal>
    </HoverCard.Root>
 )
}
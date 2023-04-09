import { Slot } from '@radix-ui/react-slot';

export function Button({ asChild, children, ...props}) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp className="w-fit flex gap-1 p-3 text-base font-medium rounded-xl bg-LightGreen text-DarkPurple hover:brightness-50" {...props} >
            {children}
        </Comp>
    );

    //className="w-fit py-4 px-3 rounded-xl bg-LightGreen text-DarkPurple hover:brightness-50"
}
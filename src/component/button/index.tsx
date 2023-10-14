import cn from 'classnames';
import React from 'react'

type TButton = {
    className?: string;
    children: React.ReactElement
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, children, ...props }: TButton) => {
    return (
        <>
            <button className={cn(className, '')} {...props}>
                {children}</button>
        </>)
}

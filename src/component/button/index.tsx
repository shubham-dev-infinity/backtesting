import cn from 'classnames';
import React from 'react'
import "./styles.scss"

type TButton = {
    className?: string;
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, children, ...props }: TButton) => {
    return (
        <>
            <button className={cn(className, 'cm_btn', 'font-bold py-2 px-12', className)} {...props}>
                {children}</button>
        </>)
}

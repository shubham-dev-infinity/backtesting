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
            <button className={cn(className, 'cm_btn', 'font-bold py-3 px-7 lg:py-2 lg:px-8 text-xs md:text-sm', className)} {...props}>
                {children}</button>
        </>)
}

import cn from "classnames";

type TText = {
    className?: string;
    type: string;
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>

const Text = ({ className, type, label, ...props }: TText) => {
    return (
        <>
            <label htmlFor="">{label}</label>
            <input type={type} className={cn(className, '')} {...props} />
        </>)
}

export default Text
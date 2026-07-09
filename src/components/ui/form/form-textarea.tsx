interface FormTextareaProps
extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{

    error?: string;
}

export default function FormTextarea({
    error,
    className,
    ...props
}: FormTextareaProps){

    return (

        <textarea
            className={`
                input
                ${error ? "border-danger" : ""}
                ${className}
            `}
            {...props}
        />

    );
}
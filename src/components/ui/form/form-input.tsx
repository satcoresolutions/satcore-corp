interface FormInputProps
extends React.InputHTMLAttributes<HTMLInputElement>{

    error?: string;
}

export default function FormInput({
    error,
    className,
    ...props
}: FormInputProps){

    return (

        <input
            className={`
                input
                ${error ? "border-danger" : ""}
                ${className}
            `}
            {...props}
        />

    );
}
interface FormErrorProps {

    message?: string;

}

export default function FormError({
    message
}: FormErrorProps){

    if(!message)
        return null;

    return (

        <span
            className="
                text-xs
                text-danger
            "
        >
            {message}
        </span>

    );

}
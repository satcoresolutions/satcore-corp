interface FormLabelProps {

    children: React.ReactNode;

}

export default function FormLabel({
    children
}: FormLabelProps){

    return (

        <label
            className="
                text-sm
                font-medium
            "
        >
            {children}
        </label>

    );
}
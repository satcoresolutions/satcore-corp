"use client";

import {
    FormProps
} from "./form.types";

import {
    useForm
} from "./use-form";

import FormInput from "./form-input";

import FormTextarea from "./form-textarea";

import FormError from "./form-error";

import FormLabel from "./form-label";

export default function Form<
T extends Record<string, unknown>
>({
    title,
    description,
    fields,
    schema,
    onSubmit,
    submitText="Enviar"
}:FormProps<T>){

    const {
        errors,
        handleChange,
        handleSubmit
    } = useForm(
        schema,
        onSubmit
    );

    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >

            {title && (
                <h2>{title}</h2>
            )}

            {description && (
                <p>{description}</p>
            )}

            {
                fields.map(field=>{

                    const error =
                        errors[
                            field.name as string
                        ];

                    return (

                        <div
                            key={String(field.name)}
                            className="space-y-2"
                        >

                            <FormLabel>
                                {field.label}
                            </FormLabel>

                            {
                                field.type ===
                                "textarea"

                                ?

                                <FormTextarea
                                    placeholder={
                                        field.placeholder
                                    }
                                    error={error}
                                    onChange={e=>
                                        handleChange(
                                            field.name,
                                            e.target.value
                                        )
                                    }
                                />

                                :

                                <FormInput
                                    type={
                                        field.type ??
                                        "text"
                                    }
                                    placeholder={
                                        field.placeholder
                                    }
                                    error={error}
                                    onChange={e=>
                                        handleChange(
                                            field.name,
                                            e.target.value
                                        )
                                    }
                                />

                            }

                            <FormError
                                message={error}
                            />

                        </div>

                    );

                })
            }

        </form>

    );

}
import type {
  FormFieldsProps,
} from "../types/form.types";

export default function FormFields({
  content,
}: FormFieldsProps) {
  return (
    <>
      <input
        type="text"
        placeholder={content.fields.name}
        className="
          w-full
          rounded-xl
          px-4
          py-3
          border
        "
      />

      <input
        type="email"
        placeholder={content.fields.email}
        className="
          w-full
          rounded-xl
          px-4
          py-3
          border
        "
      />

      <textarea
        rows={6}
        placeholder={content.fields.message}
        className="
          w-full
          rounded-xl
          px-4
          py-3
          border
          resize-none
        "
      />
    </>
  );
}
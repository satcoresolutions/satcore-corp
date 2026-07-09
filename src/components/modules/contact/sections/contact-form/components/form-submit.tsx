import Button from "@/components/ui/button";

interface FormSubmitProps {
  label: string;
  loading: boolean;
}

export default function FormSubmit({
  label,
  loading,
}: FormSubmitProps) {
  return (
    <Button
      type="submit"
      disabled={loading}
    >
      {loading
        ? "Sending..."
        : label}
    </Button>
  );
}
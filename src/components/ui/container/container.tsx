import type {
  ContainerProps,
} from "./container.types";

export default function Container({
  children,
  className = "",
  fluid = false,
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full

        px-4
        sm:px-6
        lg:px-8

        ${
          fluid
            ? ""
            : "max-w-screen-2xl"
        }

        ${className}
      `}
      style={{
        borderRadius:
          "var(--radius-container)",
      }}
    >
      {children}
    </div>
  );
}
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

        px-6
        sm:px-8
        lg:px-10

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
"use client";

import {
  createPortal,
} from "react-dom";

import {
  useEffect,
  useState,
} from "react";

import type {
  ModalProps,
} from "./modal.types";

import {
  modalVariants,
} from "./modal.variants";

export default function Modal({
  open,
  children,
  variant = "default",
  onClose,
  contentClassName,
}: ModalProps) {
  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !open) {
    return null;
  }

  const variantStyle =
    modalVariants[variant];

  return createPortal(
    <div
      className="
        fixed
        inset-0
        z-9999
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-black/50
        "
        onClick={onClose}
      />

      <div
        className={`
          relative
          z-10
          w-full
          ${
            contentClassName ??
            "max-w-lg p-6"
          }
        `}
        style={{
          borderRadius:
            "var(--radius-modal)",

          ...variantStyle,
        }}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
"use client";

import {
  PhotoProvider,
  PhotoView,
} from "react-photo-view";

import Image from "@/components/ui/image";

import type {
  OverviewImageProps,
} from "../types/overview.types";

export default function OverviewImage({
  image,
  alt,
}: OverviewImageProps) {
  return (
    <PhotoProvider
      maskOpacity={0.9}
    >
      <PhotoView
        src={image}
      >
        <button
          type="button"
          className="
            block
            w-full
            overflow-hidden
            rounded-3xl
            transition-transform
            hover:scale-[1.01]
            cursor-zoom-in
          "
        >
          <div
            className="
              aspect-square
              overflow-hidden
            "
          >
            <Image
              src={image}
              alt={alt}
              variant="card"
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>
        </button>
      </PhotoView>
    </PhotoProvider>
  );
}
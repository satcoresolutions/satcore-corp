"use client";

import "react-photo-view/dist/react-photo-view.css";

import {
  PhotoProvider,
} from "react-photo-view";

import {
  NuqsAdapter,
} from "nuqs/adapters/next/app";

import {
  ThemeProvider,
} from "./theme-provider";

import type {
  ReactNode,
} from "react";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({
  children,
}: AppProviderProps) {
  return (
    <NuqsAdapter>

      <ThemeProvider>

        <PhotoProvider
          maskOpacity={0.9}
        >
          {children}
        </PhotoProvider>

      </ThemeProvider>

    </NuqsAdapter>
  );
}
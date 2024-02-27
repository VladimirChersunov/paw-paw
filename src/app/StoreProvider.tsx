"use client";
import type { AppStore } from "./lib/store";
import { makeStore } from "./lib/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    //Создаем экземпляр хранилища при первом рендеринге
    storeRef.current = makeStore();
  }

  useEffect(() => {
    if (storeRef.current != null) {
      //настраиваем прослушиватели, используя предоставленные значения по умолчанию
      //необязательно, но необходимо для поведения `refetchOnFocus`/`refetchOnReconnect`
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};
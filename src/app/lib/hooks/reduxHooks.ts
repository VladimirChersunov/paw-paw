import { useDispatch, useSelector, useStore } from "react-redux";

//Этот файл служит центральным узлом для повторного экспорта предварительно набранных хуков Redux.
import type { AppDispatch, AppStore, RootState } from "../store";

//Используйте во всем приложении вместо обычных `useDispatch` и `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

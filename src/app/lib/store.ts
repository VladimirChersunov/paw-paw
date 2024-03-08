import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice';


//`combineSlices` автоматически объединяет редьюсеры, используя их 
//`reducerPath`, поэтому нам уже не нужно вызывать `combineReducers`.
const rootReducer = combineSlices(
  {
    user: userReducer,
  }
);
// Выведите тип `RootState` из корневого редьюсера.
export type RootState = ReturnType<typeof rootReducer>;

// `makeStore` инкапсулирует конфигурацию магазина, чтобы разрешить
//создание уникальных экземпляров магазина, что особенно важно для
//сценарии рендеринга на стороне сервера (SSR). В SSR отдельные экземпляры хранилища
//необходимы для каждого запроса, чтобы предотвратить загрязнение состояния перекрестных запросов.
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    //Добавление промежуточного программного обеспечения API позволяет кэшировать, делать недействительными, опросить,
    //и другие полезные возможности `rtk-query`.
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat();
    },
  });
};

//Определить тип возвращаемого значения `makeStore`
export type AppStore = ReturnType<typeof makeStore>;

//Выводим тип `AppDispatch` из самого магазина
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;

import { useDispatch, useSelector, useStore } from "react-redux";
import {AppStore,AppDispatch,RootState} from './store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<AppStore>();
export const useAppSelector = useSelector.withTypes<RootState>();
import { combineReducers } from 'redux';
import themeReducer from '@/store/reducers/theme';

export const appReducer = combineReducers({
	theme: themeReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action)
}

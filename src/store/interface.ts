import {State as AppState} from './app/interface';
import { Route } from 'vue-router';

export interface RootState {
  app: AppState,
  route: Route
}
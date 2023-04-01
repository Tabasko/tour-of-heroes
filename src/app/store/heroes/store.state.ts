import { Observable, of } from "rxjs";
import { Hero } from "src/app/hero";


export interface HeroesState {
  heroes: Hero[];
  loading: boolean;
  error: string | null;
}

export const initialState: HeroesState = {
  heroes: [],
  loading: false,
  error: null
};

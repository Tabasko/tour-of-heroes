import { Observable, of } from "rxjs";
import { Hero } from "src/app/feature/hero";


export interface HeroesState {
  heroes: Hero[];
  loading: boolean;
  error: string | null;
  hero?: Hero;
}

export const initialState: HeroesState = {
  heroes: [],
  loading: false,
  error: null
};

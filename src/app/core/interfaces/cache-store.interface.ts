// Modelos.
import { Country } from "./country-interface";
import { Region } from "./region.type";



interface TermCountries {
  textInput: string;
  countries: Array<Country>;
}

interface RegionCountries {
  region:    Region;
  countries: Array<Country>;
}

export interface CacheStore {
  byCapital:   TermCountries;
  byCountries: TermCountries;
  byRegion:    RegionCountries;
}

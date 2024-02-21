export interface Tag {
  currentPage?:  number;
  data?:         Datum[];
  firstPageURL?: string;
  from?:         number;
  lastPage?:     number;
  lastPageURL?:  string;
  links?:        Link[];
  nextPageURL?:  null;
  path?:         string;
  perPage?:      number;
  prevPageURL?:  null;
  to?:           number;
  total?:        number;
}

export interface Datum {
  id?:        number;
  nivel1?:    string;
  nivel2?:    string;
  nivel3?:    string;
  nivel4?:    string;
  createdAt?: null;
  updatedAt?: null;
}

export interface Link {
  url?:    null | string;
  label?:  string;
  active?: boolean;
}

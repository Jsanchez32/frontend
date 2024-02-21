export interface UsersResponse {
    currentPage?:  number;
    data?:         Content[];
    firstPageURL?: string;
    from?:         number;
    lastPage?:     number;
    lastPageURL?:  string;
    links?:        Link[];
    nextPageURL?:  string;
    path?:         string;
    perPage?:      number;
    prevPageURL?:  null;
    to?:           number;
    total?:        number;
}

export interface Content {
    id?:       number;
    nombre?:   string;
    apellido?: string;
    edad?:     string;
    ciudad?:   string;
    cargo?:    string;
    email?:    string;
}

export interface Link {
    url?:    null | string;
    label?:  string;
    active?: boolean;
}



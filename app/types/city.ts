export  interface City {
    city: string
    country: string
    id: string
    locations: Array<Location>
}

export interface Location {
    name: string,
    info: string
}
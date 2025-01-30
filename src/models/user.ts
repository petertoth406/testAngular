export interface User{
    id: number,
    name: string,
    username: string,
    email: string
    address: Address | any
    phone: string,
    website: string,
    company?: Company,
    showAddress?: boolean
}

export interface Address{
    
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo?: {
        lat: string,
        lng: string
    }
}

export interface Company{
    
    name: string,
    catchPhrase: string,
    bs: string
    
}
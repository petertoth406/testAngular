export interface User{
    id: number,
    name: string,
    username: string,
    email: string,
    address: any, //todo: Address interface
    phone: string,
    website: string,
    company: any //todo: Company interface  
}

export interface Address{
    street: string,
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
}

export interface Company{
    
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      
}
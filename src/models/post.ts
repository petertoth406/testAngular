export interface Post{
    userId: number,
    id: number,
    title: string,
    body: string,
    userName: string
}

export interface Comment{
    postId: number,
    id: number,
    name: string,
    email: string
    body: string
}
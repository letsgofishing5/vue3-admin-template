export interface LoginUser {
    username: string
    password: string
}
export interface UserModel extends LoginUser {
    token: string
    role: string[]
}
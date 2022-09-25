export default interface User {
    id: number;
    name?: string;
    token?: string;
    expiration?: string;
}

export function IsUser(u: object): u is User {
    return (u as User).id != undefined;
}

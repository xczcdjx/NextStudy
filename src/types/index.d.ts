export {}
declare global{
    type PostType={ id: string, title: string, views: number,desc:string|null }
    type LoginFieldType = {
        username: string;
        password: string;
    };
}
export async function getBody<T extends Record<string, any> = any>(req: Request) {
    const contentType = req.headers.get('content-type') || ''
    let data: T = {} as T
    if (contentType.includes('application/json')) {
        data = await req.json();
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
        const body = await req.text();
        data = Object.fromEntries(new URLSearchParams(body)) as T;
    } else {
        throw {msg: 'Unsupported Content-Type', code: 415}
    }
    return data
}
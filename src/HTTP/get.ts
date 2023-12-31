import axios, { CancelTokenSource } from "axios";

export default async function get<T>(
    endpoint: string,
    source?: CancelTokenSource | null | undefined
): Promise<T | null> {
    const config = {
        method: 'get',
        url: `https://api.exalgo.tech/api/dev/${endpoint}`,
        cancelToken: source?.token,
    };

    try {
        const response = await axios.request(config);
        return response.data as T;
    } catch (error: any) {
        console.error(error.message);
        return null; // Return null for failed requests
    }
}

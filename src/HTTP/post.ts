import axios, { AxiosError, CancelTokenSource } from "axios";

export default async function post<T>(
    endpoint: string,
    data: Record<string, string>,
    source?: CancelTokenSource
): Promise<T> {
    try {
        const response = await axios.post<T>(`http://192.168.29.123:3000/${endpoint}`, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            },
            maxBodyLength: Infinity,
            cancelToken: source?.token,
        });

        return response.data;
    } catch (error) {
        throw new Error((error as AxiosError).message);
    }
}
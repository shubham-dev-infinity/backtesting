import axios, { AxiosError, CancelTokenSource } from "axios";
import { toast } from "react-toastify";

export default async function post<T>(
    endpoint: string,
    data: Record<string, string>,
    source?: CancelTokenSource
): Promise<T> {
    try {
        const response = await axios.post<T>(`https://api.exalgo.tech/api/dev/${endpoint}`, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            },
            maxBodyLength: Infinity,
            cancelToken: source?.token,
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            const responseMessage = axiosError.response?.data as object;
            if (Object.keys(responseMessage).length !== 0) {
                toast.error(error.response?.data.message)
                throw new Error((responseMessage as any)?.message);
            } else {
                throw new Error(axiosError.message || "An error occurred.");
            }
        } else {
            throw error;
        }
    }

}
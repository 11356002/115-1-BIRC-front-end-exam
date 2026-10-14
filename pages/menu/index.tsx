import { useCallback, useEffect, useState } from "react";
import type { AxiosError } from "axios";
import restaurantAPI from '@/lib/api/restaurantAPI'
import { Menu } from "@/lib/types/restaurantType";


export default function ExamplePage() {
    const [data, setData] = useState<Menu[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            restaurantAPI.getMenu

            const result: ExampleData[] = [];
            setData(result);
        } catch (err) {
            const axiosError = err as AxiosError<{ message?: string }>;
            setError(
                axiosError.response?.data?.message ?? "資料載入失敗"
            );
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void fetchData();
    }, [fetchData]);

    if (loading) {
        return <main>載入中...</main>;
    }

    if (error) {
        return (
            <main>
                <p>{error}</p>
                <button type="button" onClick={() => void fetchData()}>
                    重新載入
                </button>
            </main>
        );
    }

    return (
        <main>
            <h1>資料列表</h1>

            {data.length === 0 ? (
                <p>目前沒有資料</p>
            ) : (
                data.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))
            )}
        </main>
    );
}

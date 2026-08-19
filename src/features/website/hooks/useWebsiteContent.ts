import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../../../shared/api/endpoints.ts"; // تأكد من مسار الاستيراد الصحيح

// كاش محلي لمنع تكرار الطلبات عند التنقل بين الصفحات
let cachedContent: any = null;
let isFetching = false;
let fetchPromise: Promise<any> | null = null;

export function useWebsiteContent() {
  const [data, setData] = useState<any>(cachedContent);
  const [isLoading, setIsLoading] = useState<boolean>(!cachedContent);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cachedContent) {
      setData(cachedContent);
      setIsLoading(false);
      return;
    }

    if (!fetchPromise) {
      isFetching = true;
      // 🌟 استخدام المسار المنظم من ملف الـ endpoints 🌟
      fetchPromise = fetch(API_ENDPOINTS.CONTENT.GET_ALL, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch website content");
          }
          return response.json();
        })
        .then((jsonData) => {
          const content = jsonData.data || jsonData;
          cachedContent = content; 
          return content;
        });
    }

    fetchPromise
      .then((content) => {
        setData(content);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      })
      .finally(() => {
        isFetching = false;
      });

  }, []);

  return { data, isLoading, error };
}
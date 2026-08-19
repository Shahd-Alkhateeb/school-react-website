import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../../../shared/api/endpoints.ts";

let cachedStats: any = null;
let statsFetchPromise: Promise<any> | null = null;

export function useWebsiteStats() {
  const [data, setData] = useState<any>(cachedStats);
  const [isLoading, setIsLoading] = useState<boolean>(!cachedStats);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cachedStats) {
      setData(cachedStats);
      setIsLoading(false);
      return;
    }

    if (!statsFetchPromise) {
      statsFetchPromise = fetch(API_ENDPOINTS.WEBSITE_STATS.GET, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch website stats");
          }
          return response.json();
        })
        .then((jsonData) => {
          const statsData = jsonData.data || jsonData;
          cachedStats = statsData;
          return statsData;
        });
    }

    statsFetchPromise
      .then((statsData) => {
        setData(statsData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });

  }, []);

  return { data, isLoading, error };
}
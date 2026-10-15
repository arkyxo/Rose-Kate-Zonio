import { useEffect, useState } from "react";

const CACHE_KEY = "image-urls";
const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

export const localImages = Object.fromEntries(
  Object.entries(import.meta.glob("./assets/*.{png,jpg,jpeg,webp,gif,svg}", { eager: true, import: "default" })).map(([path, url]) => [
    path.split("/").pop().replace(/\.[^.]+$/, ""),
    url,
  ])
);

const readCache = () => {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
  } catch {
    return {};
  }
};

let remoteImages = readCache();

export const optimized = (url) =>
  url && url.includes("res.cloudinary.com") && !url.includes("/upload/f_auto") ? url.replace("/upload/", "/upload/f_auto,q_auto/") : url;

const isUrl = (value) => /^(https?:|data:|blob:|\/|\.)/.test(value);

export const img = (key) => {
  if (!key) return undefined;
  if (isUrl(key)) return key;
  return optimized(remoteImages[key]) || localImages[key] || undefined;
};

export async function fetchRemoteImages() {
  if (!PROJECT_ID || !API_KEY) return {};
  const urls = {};
  let pageToken = "";
  do {
    const params = new URLSearchParams({ pageSize: "300", key: API_KEY });
    if (pageToken) params.set("pageToken", pageToken);
    const res = await fetch(`https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/images?${params}`);
    if (!res.ok) throw new Error(`Firestore request failed (${res.status})`);
    const data = await res.json();
    for (const d of data.documents || []) {
      const url = d.fields?.url?.stringValue;
      if (url) urls[decodeURIComponent(d.name.split("/").pop())] = url;
    }
    pageToken = data.nextPageToken || "";
  } while (pageToken);
  return urls;
}

export function useRemoteImages() {
  const [, setVersion] = useState(0);
  useEffect(() => {
    let alive = true;
    fetchRemoteImages()
      .then((urls) => {
        if (!alive) return;
        remoteImages = urls;
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(urls));
        } catch {}
        setVersion((v) => v + 1);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);
}

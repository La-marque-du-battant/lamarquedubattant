import { getToken } from "@/lib/auth";

// utils/fetchClient.ts
export interface FetchOptions {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: any;
  headers?: Record<string, string>;
  credentials?: RequestCredentials;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

/**
 * Utility function to make HTTP requests with fetch, automatically including a token if available.
 * @param endpoint - The API endpoint (relative to API_URL).
 * @param options - The options for the fetch request.
 * @returns The response as JSON or text based on content type.
 */

export const fetchClient = async (
  endpoint: string,
  options: FetchOptions = {}
) => {
  const token = getToken();

  const headers: Record<string, string> = {
    ...options.headers, // Preserve custom headers if provided
  };

  // Add the Authorization header if a token is available
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // Detect if body is FormData and skip setting Content-Type header
  const isFormData = options.body instanceof FormData;

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    method: options.method || "GET",
    headers,
    credentials: options.credentials || "include",
    body: isFormData ? options.body : JSON.stringify(options.body),
  });

  if (!response.ok) {
    // Handle errors (e.g., logging, throwing custom error, etc.)
    const error = await response.text();
    throw new Error(`HTTP Error ${response.status}: ${error}`);
  }

  // Automatically parse JSON response if possible
  const contentType = response.headers.get("Content-Type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
};

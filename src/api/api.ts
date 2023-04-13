import useSWR from "swr";

interface APIError extends Error {
  info?: JSON;
  status?: number;
}

interface FetcherProps {
  url: string;
  token?: string;
}

export const makeRequest = async (request: Request, errorMessage: string) => {
  try {
    const response = await fetch(request);

    if (!response.ok) {
      const json = await response.json();
      const error: APIError = new Error(json.message || errorMessage);
      error.info = json;
      error.status = response.status;
      throw error;
    }
    return await response.json()
  } catch (error) {
    return error;
  }
};

export const fetcher = async (url: string) => {
    const response = await fetch(url)

    let result = null;

    try {
        result = await response.json()
    } catch {}

    if(!result || !response.ok) {
        const error: APIError = new Error(result.message || 'An error occured fetching data')
        
        error.info = result || {}
        error.status = response.status
        throw error;
    }
    return result
}

export const getSWROptions = ({
    revalidateOnMount = true,
    revalidateOnFocus = false,
    revalidateOnReconnect = false,
    shouldRetryOnError = true,
    refreshInterval = 0,
    focusThrottleInterval = 5000,
  }) => ({
    revalidateOnMount,
    revalidateOnFocus,
    revalidateOnReconnect,
    shouldRetryOnError,
    refreshInterval,
    focusThrottleInterval,
  });

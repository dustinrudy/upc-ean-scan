import useSWR, { SWRResponse } from "swr";
import { Product } from "../models/product";
import { nodeApiHostName } from "../config";
import { fetcher } from "../api";

export const useAllProducts = () => {
  return useSWR(`${nodeApiHostName}/items`, fetcher);
};

export const useProduct = (code: string): SWRResponse => {
  return useSWR(`${nodeApiHostName}/items/${code}`, fetcher);
};

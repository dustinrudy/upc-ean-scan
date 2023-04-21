import useSWR, { SWRResponse } from "swr";
import { Product } from "../models/product";
import { nodeApiHostName } from "../config";
import { fetcher } from "../api";
import axios from "axios";

export const useAllProducts = () => {
  return useSWR(`${nodeApiHostName}/items`, fetcher);
};

export const useProduct = (code: string): SWRResponse => {
  return useSWR(`${nodeApiHostName}/items/${code}`, fetcher);
};

export const scanProduct = async (code: string) => {
  try {
    const response = await axios.post(`${nodeApiHostName}/items/${code}`);
    return response
  } catch (error) {
    return error;
  }
} 

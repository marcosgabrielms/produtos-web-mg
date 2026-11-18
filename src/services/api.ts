import type { Product } from '../types/product';
import { PRODUCTS } from '../data/products';

const API_URL = import.meta.env.VITE_API_URL as string | undefined;

export type ProductSource = 'api' | 'local';

export interface ProductsResult {
  products: Product[];
  source: ProductSource;
}

/**
 * Busca os produtos na API REST (se VITE_API_URL estiver definida).
 * Se a API não estiver configurada ou falhar, usa os dados locais.
 */
export async function fetchProducts(signal?: AbortSignal): Promise<ProductsResult> {
  if (!API_URL) return { products: PRODUCTS, source: 'local' };

  try {
    const response = await fetch(`${API_URL.replace(/\/$/, '')}/api/products`, { signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const products = (await response.json()) as Product[];
    return { products, source: 'api' };
  } catch (error) {
    if (signal?.aborted) throw error;
    console.warn('Falha ao acessar a API, usando dados locais.', error);
    return { products: PRODUCTS, source: 'local' };
  }
}

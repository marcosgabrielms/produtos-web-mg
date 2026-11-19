import type { ReactNode } from 'react';
import type { Product } from '../../types/product';
import { ProductCategoryRow } from '../ProductCategoryRow/ProductCategoryRow';
import { ProductRow } from '../ProductRow/ProductRow';
import styles from './ProductTable.module.css';

interface ProductTableProps {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}

// Minúsculas e sem acentos: "maca" encontra "Maçã"
const normalize = (text: string) =>
  text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export function ProductTable({ products, filterText, inStockOnly }: ProductTableProps) {
  const rows: ReactNode[] = [];
  let lastCategory: string | null = null;
  const query = normalize(filterText.trim());

  products.forEach((product) => {
    if (!normalize(product.name).includes(query)) return;
    if (inStockOnly && !product.stocked) return;

    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nome</th>
          <th className={styles.right}>Preço</th>
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? (
          rows
        ) : (
          <tr>
            <td colSpan={2} className={styles.empty}>
              Nenhum produto encontrado para “{filterText.trim()}”.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

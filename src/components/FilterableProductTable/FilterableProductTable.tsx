import { useState } from 'react';
import type { Product } from '../../types/product';
import { ProductTable } from '../ProductTable/ProductTable';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './FilterableProductTable.module.css';

interface FilterableProductTableProps {
  products: Product[];
}

/**
 * Componente "dono" do estado (Passo 4 do tutorial):
 * é o pai comum de SearchBar (que altera o estado)
 * e de ProductTable (que lê o estado para filtrar a lista).
 */
export function FilterableProductTable({ products }: FilterableProductTableProps) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className={styles.card}>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
}

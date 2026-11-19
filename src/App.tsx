import { useEffect, useState } from 'react';
import { FilterableProductTable } from './components/FilterableProductTable/FilterableProductTable';
import { fetchProducts, type ProductSource } from './services/api';
import type { Product } from './types/product';
import styles from './App.module.css';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [source, setSource] = useState<ProductSource | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetchProducts(controller.signal)
      .then((result) => {
        setProducts(result.products);
        setSource(result.source);
        setLoading(false);
      })
      .catch(() => {
        /* requisição cancelada (desmontagem do componente) */
      });
    return () => controller.abort();
  }, []);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>⚛️ Thinking in React</p>
        <h1>Produtos Web</h1>
        <p>Busque frutas e verduras pelo nome ou veja só o que tem em estoque.</p>
      </header>

      {loading ? (
        <p className={styles.status}>Carregando produtos...</p>
      ) : (
        <FilterableProductTable products={products} />
      )}

      {source && (
        <footer className={styles.footer}>
          Fonte dos dados: <strong>{source === 'api' ? 'API REST' : 'dados locais'}</strong>
        </footer>
      )}
    </main>
  );
}

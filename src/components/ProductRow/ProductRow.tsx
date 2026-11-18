import type { Product } from '../../types/product';
import styles from './ProductRow.module.css';

interface ProductRowProps {
  product: Product;
}

export function ProductRow({ product }: ProductRowProps) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span className={styles.outOfStock}>{product.name}</span>
  );

  return (
    <tr className={styles.row}>
      <td>{name}</td>
      <td className={styles.price}>{product.price}</td>
    </tr>
  );
}

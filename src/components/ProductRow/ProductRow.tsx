import type { Product } from '../../types/product';
import styles from './ProductRow.module.css';

interface ProductRowProps {
  product: Product;
}

export function ProductRow({ product }: ProductRowProps) {
  return (
    <tr className={product.stocked ? styles.row : `${styles.row} ${styles.outOfStock}`}>
      <td>
        <span className={styles.product}>
          {/* Sem emoji no Unicode (pitaya, maracujá): mostra a inicial */}
          <span className={styles.icon} aria-hidden="true">
            {product.emoji ?? product.name.charAt(0)}
          </span>
          <span className={styles.name}>{product.name}</span>
          {!product.stocked && <span className={styles.badge}>Esgotado</span>}
        </span>
      </td>
      <td className={styles.price}>{product.price}</td>
    </tr>
  );
}

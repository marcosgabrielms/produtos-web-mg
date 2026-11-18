import styles from './ProductCategoryRow.module.css';

interface ProductCategoryRowProps {
  category: string;
}

export function ProductCategoryRow({ category }: ProductCategoryRowProps) {
  return (
    <tr>
      <th colSpan={2} className={styles.category}>
        {category}
      </th>
    </tr>
  );
}

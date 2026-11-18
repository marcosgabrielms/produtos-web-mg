import styles from './SearchBar.module.css';

interface SearchBarProps {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (value: string) => void;
  onInStockOnlyChange: (value: boolean) => void;
}

export function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: SearchBarProps) {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        className={styles.input}
        value={filterText}
        placeholder="Buscar..."
        aria-label="Buscar produto"
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        Mostrar apenas produtos em estoque
      </label>
    </form>
  );
}

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
    <form className={styles.form} role="search" onSubmit={(e) => e.preventDefault()}>
      <label className={styles.search}>
        <svg className={styles.searchIcon} viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="9" cy="9" r="6" />
          <path d="m13.5 13.5 4 4" />
        </svg>
        <input
          type="search"
          className={styles.input}
          value={filterText}
          placeholder="Buscar..."
          aria-label="Buscar produto"
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </label>
      <label className={styles.toggle}>
        <input
          type="checkbox"
          role="switch"
          className={styles.toggleInput}
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        <span className={styles.toggleTrack} aria-hidden="true" />
        Mostrar apenas produtos em estoque
      </label>
    </form>
  );
}

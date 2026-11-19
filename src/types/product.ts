export interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
  /** Emoji do produto, quando existe um no Unicode */
  emoji?: string;
}

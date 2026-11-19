export interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
  emoji?: string;
}

// "Banco de dados" em memória com os dados do tutorial Thinking in React
export const products: Product[] = [
  { category: 'Frutas', price: 'R$ 1,00', stocked: true, name: 'Maçã', emoji: '🍎' },
  { category: 'Frutas', price: 'R$ 1,00', stocked: true, name: 'Pitaya' },
  { category: 'Frutas', price: 'R$ 2,00', stocked: false, name: 'Maracujá' },
  { category: 'Vegetais', price: 'R$ 2,00', stocked: true, name: 'Espinafre', emoji: '🥬' },
  { category: 'Vegetais', price: 'R$ 4,00', stocked: false, name: 'Abóbora', emoji: '🎃' },
  { category: 'Vegetais', price: 'R$ 1,00', stocked: true, name: 'Ervilha', emoji: '🫛' },
];

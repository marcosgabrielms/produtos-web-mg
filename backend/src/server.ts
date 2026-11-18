import cors from 'cors';
import express, { type Request, type Response } from 'express';
import { products, type Product } from './products.js';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// CORS_ORIGIN pode ser uma lista separada por vírgula (ex.: URL da Vercel). Padrão: qualquer origem.
const origins = process.env.CORS_ORIGIN?.split(',').map((o) => o.trim());
app.use(cors({ origin: origins ?? '*' }));
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.json({ name: 'produtos-web-api', endpoints: ['/health', '/api/products'] });
});

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// GET /api/products?q=app&inStock=true&category=Frutas
app.get('/api/products', (req: Request, res: Response) => {
  const q = typeof req.query.q === 'string' ? req.query.q.toLowerCase() : '';
  const inStock = req.query.inStock === 'true';
  const category = typeof req.query.category === 'string' ? req.query.category : undefined;

  const result = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) &&
      (!inStock || p.stocked) &&
      (!category || p.category === category),
  );
  res.json(result);
});

app.get('/api/products/:name', (req: Request, res: Response) => {
  const product = products.find((p) => p.name.toLowerCase() === String(req.params.name).toLowerCase());
  if (!product) {
    res.status(404).json({ error: 'Produto não encontrado' });
    return;
  }
  res.json(product);
});

app.post('/api/products', (req: Request, res: Response) => {
  const body = req.body as Partial<Product>;
  if (
    typeof body.name !== 'string' ||
    typeof body.category !== 'string' ||
    typeof body.price !== 'string' ||
    typeof body.stocked !== 'boolean'
  ) {
    res.status(400).json({ error: 'Campos obrigatórios: name, category, price (string), stocked (boolean)' });
    return;
  }
  if (products.some((p) => p.name.toLowerCase() === body.name!.toLowerCase())) {
    res.status(409).json({ error: 'Produto já existe' });
    return;
  }
  const product: Product = {
    name: body.name,
    category: body.category,
    price: body.price,
    stocked: body.stocked,
  };
  products.push(product);
  res.status(201).json(product);
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});

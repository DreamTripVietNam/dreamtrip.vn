## Project Overview
This is a **Next.js 16 Commerce** application built with React 19, TypeScript, and Shopify integration. It's a high-performance, server-rendered ecommerce storefront using the latest Next.js App Router features.

## Tech Stack
- **Framework**: Next.js 16.0.1 (App Router)
- **React**: 19.2.0 (with Server Components, Server Actions, Suspense)
- **TypeScript**: 5.9.3
- **Styling**: Tailwind CSS 4.1.16
- **UI Components**: Headless UI, Heroicons
- **E-commerce Backend**: Shopify (GraphQL API)
- **Package Manager**: pnpm
- **Code Quality**: Biome (formatter & linter)
- **Font**: Geist Sans

## Project Structure

```
www/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with CartProvider
│   ├── page.tsx             # Homepage
│   ├── product/[handle]/    # Dynamic product pages
│   ├── search/              # Search & collection pages
│   ├── [page]/              # Dynamic CMS pages
│   └── api/                 # API routes (revalidation)
├── components/              # React components (32 files)
│   ├── cart/               # Shopping cart components
│   ├── product/            # Product display components
│   ├── grid/               # Grid & tile components
│   ├── layout/             # Layout components (navbar, footer)
│   └── *.tsx               # Shared components
├── lib/                     # Utilities & integrations
│   ├── shopify/            # Shopify GraphQL client & queries
│   │   ├── index.ts        # Main API functions
│   │   ├── queries/        # GraphQL queries
│   │   ├── mutations/      # GraphQL mutations
│   │   ├── fragments/      # GraphQL fragments
│   │   └── types.ts        # TypeScript types
│   ├── constants.ts        # App constants
│   ├── utils.ts            # Utility functions
│   └── type-guards.ts      # TypeScript type guards
├── data/                    # Static data
│   └── metadata.ts         # Site metadata
└── fonts/                   # Custom fonts

```

## Key Technologies & Patterns

### Next.js 16 Specific Features
- **Server Components**: Default for all components unless "use client"
- **Server Actions**: Used for cart operations
- **Suspense Boundaries**: Required for async data fetching
- **Dynamic Params**: `params` is a Promise in Next.js 15+
- **Caching**: Uses `cacheLife()`, `cacheTag()`, `revalidateTag()`

### Important Next.js 16 Rules
1. **Params as Promises**: In pages, `params` and `searchParams` are Promises
2. **Suspense Required**: Async components accessing uncached data MUST be wrapped in `<Suspense>`
3. **Avoid Blocking**: Don't `await params` in the root page component - pass the Promise to child components
4. **Client Components**: Mark with `"use client"` directive at the top

### React 19 Features
- `useOptimistic` for optimistic UI updates
- `useFormStatus` for form submission states
- `use()` hook for unwrapping Promises

## Code Style & Standards

### TypeScript
- Strict mode enabled
- Use `type` over `interface`
- No unchecked indexed access
- Explicit return types for exported functions

### Formatting (Biome)
- **Indentation**: Tabs (not spaces)
- **Quotes**: Double quotes
- **Semicolons**: Required
- **Import Organization**: Auto-organize imports

### Component Patterns
```typescript
// Server Component (default)
export default async function ProductPage(props: {
  params: Promise<{ handle: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <ProductContent paramsPromise={props.params} />
    </Suspense>
  );
}

// Client Component
"use client";
export default function CartModal() {
  // Client-side logic
}
```

## Common Tasks

### Running the Project
```bash
pnpm install          # Install dependencies
pnpm dev             # Start dev server (with Turbopack)
pnpm build           # Production build
pnpm start           # Start production server
pnpm format          # Format code with Biome
pnpm fix             # Fix linting issues
```

### Shopify Integration
- GraphQL endpoint: `lib/shopify/index.ts`
- Queries: `lib/shopify/queries/`
- Mutations: `lib/shopify/mutations/`
- Types: `lib/shopify/types.ts`

### Cart System
- Provider: `components/cart/cart-context.tsx`
- Modal: `components/cart/modal.tsx`
- Actions: `components/cart/actions.ts`
- Server Actions for add/edit/remove

### Environment Variables
Required vars (see `.env.example`):
- `SHOPIFY_STORE_DOMAIN`
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
- `SHOPIFY_REVALIDATION_SECRET`
- `COMPANY_NAME`
- `SITE_NAME`

## Critical Patterns to Follow

### 1. Data Fetching in Pages
```typescript
// ✅ CORRECT - Pass Promise to Suspense-wrapped component
export default function Page(props: { params: Promise<{id: string}> }) {
  return (
    <Suspense fallback={<Loading />}>
      <PageContent paramsPromise={props.params} />
    </Suspense>
  );
}

async function PageContent({ paramsPromise }: { paramsPromise: Promise<{id: string}> }) {
  const params = await paramsPromise;
  const data = await fetchData(params.id);
  return <div>{data}</div>;
}

// ❌ WRONG - Awaiting params blocks rendering
export default async function Page(props: { params: Promise<{id: string}> }) {
  const params = await props.params; // This blocks!
  return <div>...</div>;
}
```

### 2. Server Actions
```typescript
// In actions.ts
"use server";
export async function updateCart(formData: FormData) {
  const cartId = cookies().get('cartId')?.value;
  // ... perform mutation
  revalidateTag(TAGS.cart);
}
```

### 3. Optimistic Updates
```typescript
const { cart, updateCartItem } = useCart();
const optimisticUpdate = updateCartItem; // From context

<EditItemQuantityButton 
  item={item} 
  optimisticUpdate={optimisticUpdate} 
/>
```

## File Organization Rules

### Component Files
- One component per file
- Co-locate related components (e.g., `cart/modal.tsx`, `cart/actions.ts`)
- Use lowercase with hyphens: `add-to-cart.tsx`

### Naming Conventions
- **Components**: PascalCase (`ProductCard`)
- **Files**: kebab-case (`product-card.tsx`)
- **Functions**: camelCase (`getProduct`)
- **Constants**: UPPER_SNAKE_CASE (`SHOPIFY_ENDPOINT`)
- **Types**: PascalCase (`Product`, `Cart`)

## Testing & Quality

### Before Committing
1. Run `pnpm format` - Format with Biome
2. Run `pnpm fix` - Fix linting issues
3. Run `pnpm build` - Ensure build succeeds
4. Check for TypeScript errors
5. Test in browser

### Common Issues & Fixes
1. **"Uncached data outside Suspense"**: Wrap async components in `<Suspense>`
2. **"params is a Promise"**: Use the pattern shown above
3. **Build errors**: Check for `"use client"` in components using hooks
4. **Hydration errors**: Ensure server/client render matches

## Agent Instructions

When working on this project:

1. **Always check Next.js 16 patterns** - This uses App Router with latest features
2. **Wrap async data fetching in Suspense** - Required for all uncached data
3. **Use Biome formatting** - Tabs, double quotes, organized imports
4. **Follow TypeScript strict mode** - No implicit any, proper types
5. **Server vs Client components** - Default server, add "use client" only when needed
6. **Test builds** - Run `pnpm build` to catch errors early
7. **Shopify integration** - All e-commerce logic goes through `lib/shopify/`
8. **Minimal changes** - Only modify what's necessary
9. **Co-locate files** - Keep related files together (e.g., all cart files in `components/cart/`)
10. **Use existing patterns** - Study existing code before adding new patterns
11. **No Conventional Commits** - Do NOT use conventional commit format (e.g., `feat:`, `fix:`) in commit messages. Use simple, descriptive sentences.

## Special Considerations

### Performance
- Server Components by default (no JavaScript shipped)
- Optimistic UI updates for instant feedback
- Image optimization with Next.js Image
- Suspense streaming for fast TTI

### SEO
- Dynamic metadata generation
- OpenGraph images
- Sitemap generation
- Robots.txt

### Accessibility
- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support

## Quick Reference

### Import Paths
- Components: `components/...`
- Lib: `lib/...`
- Data: `data/...`
- No `@/` alias - use relative imports from project root

### Key Files to Know
- `app/layout.tsx` - Root layout with providers
- `lib/shopify/index.ts` - Shopify API client
- `components/cart/cart-context.tsx` - Cart state management
- `lib/constants.ts` - App-wide constants
- `data/metadata.ts` - Site metadata

### Debugging
- Check `.next/` folder for build output
- Use React DevTools for component hierarchy
- Check Network tab for Shopify GraphQL calls
- Use Next.js dev overlay for errors

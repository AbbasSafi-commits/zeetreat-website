# ZEETREAT Product Branding Assets

## Official Assets Required

Please add the following files to this directory:

### 1. zeetreat-logo.png
- **Purpose**: Official ZEETREAT logo
- **Location**: `public/zeetreat-logo.png`
- **Usage**: Navbar and footer branding
- **Recommended Size**: 200x200px minimum, PNG with transparency

### 2. zeetreat-product.png
- **Purpose**: Official product bottle image
- **Location**: `public/zeetreat-product.png`
- **Usage**: Product showcase and marketing
- **Recommended Size**: 600x600px minimum, PNG with transparency

## Implementation Notes

The website is built to automatically use these assets once they're placed in the `/public` directory:

- The **navbar** will display the logo automatically
- The **ProductShowcase component** will reference the product image
- The **footer** will include the logo
- **3D components** use a procedurally generated bottle as a fallback

## Do Not

- ❌ Modify the logo design
- ❌ Change logo spelling or text
- ❌ Use different product bottle images
- ❌ Alter package label design
- ❌ Change bottle proportions
- ❌ Invent new product images
- ❌ Use AI-generated brand assets

## Asset Specifications

| Asset | Format | Size | Color Space | Notes |
|-------|--------|------|-------------|-------|
| Logo | PNG | 200x200px+ | RGBA | Transparent background |
| Product | PNG | 600x600px+ | RGBA | Transparent background |

Once these assets are added, rebuild the site:

```bash
npm run build
npm run start
```

The website will automatically detect and integrate the official branding.

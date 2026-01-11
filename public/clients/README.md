# Client Logos Directory

## How to Add Your Client Logos:

1. **Add your logo files** to this `public/clients/` folder
2. **Name them** as: `client-1.png`, `client-2.png`, etc.
3. **Update the code** in `src/components/Clients.jsx` to use local paths instead of placeholder URLs

## Current Setup:
The component is currently using placeholder logos with company names. To use your actual logos:

1. Add your logo images to this folder
2. In `src/components/Clients.jsx`, change the `logo` property from placeholder URLs to:
   - `/clients/client-1.png`
   - `/clients/client-2.png`
   - etc.

## File Specifications:
- **Format**: PNG (recommended) or JPG
- **Background**: White or transparent
- **Size**: 250x140px (recommended) or similar aspect ratio
- **File Size**: Under 500KB per image

## Example:
```javascript
{
  id: 1,
  name: 'Your Client Name',
  logo: '/clients/client-1.png'  // Local file path
}
```

# Logo Update Guide

This guide explains how to update the logo on your personal website.

## Current Logo Locations

The logo appears in **2 locations** on the website:

1. **Loading Screen** - Shows when the page first loads
2. **Navigation Bar** - Appears in the top navigation

## File Structure

```
assets/
└── logo/
    ├── logo.png    (71KB)
    └── logo2.png   (94KB) - Currently in use
```

## How to Update the Logo

### Option 1: Replace Existing Logo Files

1. **Backup current logos** (recommended):
   - Copy `assets/logo/logo.png` to `assets/logo/logo_backup.png`
   - Copy `assets/logo/logo2.png` to `assets/logo/logo2_backup.png`

2. **Replace the logo files**:
   - Replace `assets/logo/logo.png` with your new logo
   - Replace `assets/logo/logo2.png` with your new logo
   - Keep the same filenames to avoid code changes

### Option 2: Add New Logo Files

1. **Add your new logo** to `assets/logo/` directory
2. **Update the HTML file** (`index.html`) to reference the new file

## Code Changes Required

If you add a new logo file, you'll need to update these lines in `index.html`:

### Loading Screen Logo (Line ~25)
```html
<div class="loading-logo">
    <img src="assets/logo/YOUR_NEW_LOGO.png" alt="Logo" style="width: 60px; height: 60px; object-fit: contain;">
</div>
```

### Navigation Logo (Line ~35)
```html
<a href="#home" class="logo-link">
    <img src="assets/logo/YOUR_NEW_LOGO.png" alt="Logo" style="width: 40px; height: 40px; object-fit: contain;">
</a>
```

## Logo Specifications

### Recommended Logo Format
- **Format**: PNG (for transparency support)
- **Aspect Ratio**: Square (1:1) recommended
- **Resolution**: At least 200x200px (higher is better)

### Current Sizing
- **Loading Screen**: 60x60px
- **Navigation**: 40x40px

### Styling Properties
- `object-fit: contain` - Maintains aspect ratio
- `alt="Logo"` - Accessibility text
- Responsive sizing for mobile devices

## CSS Customization

If you need to adjust the logo styling, modify these CSS classes in `styles.css`:

### Loading Logo Styling
```css
.loading-logo {
    font-size: 3rem;
    font-weight: 700;
    /* Add custom styles here */
}
```

### Navigation Logo Styling
```css
.logo-link {
    text-decoration: none;
    transition: transform 0.3s ease;
    /* Add custom styles here */
}
```

## Testing Your Changes

1. **Open the website** in your browser
2. **Check the loading screen** - logo should appear during page load
3. **Check the navigation** - logo should appear in the top-left corner
4. **Test on mobile** - ensure logo displays correctly on smaller screens
5. **Test different browsers** - Chrome, Firefox, Safari, Edge

## Troubleshooting

### Logo Not Appearing
- Check file path is correct
- Ensure file exists in `assets/logo/` directory
- Verify file permissions
- Check browser console for errors

### Logo Too Large/Small
- Adjust the `width` and `height` values in the HTML
- Or modify the CSS classes for more control

### Logo Looks Distorted
- Ensure your logo is square or adjust CSS
- Check that `object-fit: contain` is applied
- Consider using `object-fit: cover` for different behavior

### Logo Not Loading on Mobile
- Check file size (keep under 100KB for faster loading)
- Optimize image compression
- Test on actual mobile devices

## Best Practices

1. **Use PNG format** for transparency support
2. **Keep file size small** (under 100KB) for fast loading
3. **Use square aspect ratio** for consistent display
4. **Test on multiple devices** and browsers
5. **Backup original files** before making changes
6. **Use descriptive alt text** for accessibility

## Quick Update Checklist

- [ ] Backup existing logo files
- [ ] Add new logo to `assets/logo/` directory
- [ ] Update HTML file with new filename (if needed)
- [ ] Test on desktop browser
- [ ] Test on mobile device
- [ ] Check loading screen
- [ ] Check navigation bar
- [ ] Verify logo sizing and appearance

## Support

If you encounter issues updating the logo:
1. Check this guide first
2. Verify file paths and permissions
3. Test with a simple image first
4. Check browser developer tools for errors 
== Demo ==

The Autoprefixer turnes out to reduce sourceMap quality.

Steps to reproduce:

1. Installation
```
git clone https://github.com/aslushnikov/autoprefixer-breaks-sourcemap
cd autoprefixer-breaks-sourcemap
npm install .
```

2. Build style.scss with autoprefixer
```
gulp sass
```
[output sourcemap](https://sokra.github.io/source-map-visualization/#base64,ZGl2IHsKICBjb2xvcjogcmVkOyB9CgovKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovCg==,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUhPLEVBSVYiLCJmaWxlIjoic3R5bGUuY3NzIn0=,JGNvbG9yOiByZWQ7CgpkaXYgewogICAgY29sb3I6ICRjb2xvcjsKfQoK)

Notice, how the "red" sass variable is not mapped anywhere.

3. Build style.scss without autoprefixer (via commenting out autoprefixer pipe in gulpfile.js)

```
gulp sass
```
[output sourcemap](https://sokra.github.io/source-map-visualization/#base64,ZGl2IHsKICBjb2xvcjogcmVkOyB9CgovKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovCg==,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuY3NzIiwic291cmNlcyI6WyJzdHlsZS5zY3NzIl0sIm1hcHBpbmdzIjoiQUFFQSxBQUFBLEdBQUcsQ0FBQztFQUNBLEtBQUssRUFIRCxHQUFHLEdBSVYiLCJuYW1lcyI6W119,JGNvbG9yOiByZWQ7CgpkaXYgewogICAgY29sb3I6ICRjb2xvcjsKfQoK)

Notice, how "red" sass variable is now matched to CSS property value.

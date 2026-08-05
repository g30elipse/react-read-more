![Version](https://img.shields.io/npm/v/read-more-less-react)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/read-more-less-react)](https://bundlephobia.com/result?p=read-more-less-react)
![License](https://img.shields.io/npm/l/read-more-less-react)

# React read more/less

A small React component that clamps long text to a fixed number of lines and toggles the rest with read-more / read-less buttons. Clamping is pure CSS (`-webkit-line-clamp`), so lines never get cut off mid-height and no text measuring is involved. The toggle only renders when the text actually overflows.

[Codesandbox demo](https://codesandbox.io/s/happy-cache-x4rhs?fontsize=14&hidenavigation=1&theme=dark)

## Install

```bash
npm install read-more-less-react
```

## Usage

```jsx
import ReadMoreText from 'read-more-less-react';
import 'read-more-less-react/dist/index.css'; // required styles

const Bio = () => (
    <ReadMoreText
        lines={5}
        text={longText}
    />
);
```

Don't forget the CSS import — without it the text won't clamp.

## Props

| prop | type | default | description |
|------|------|---------|-------------|
| `text` | `string` | required | The text to display |
| `lines` | `number` | `3` | Number of lines shown while collapsed |
| `type` | `'plainText' \| 'html'` | `'plainText'` | `'html'` renders the text as an HTML string and converts newlines to `<br />` |
| `readMoreText` | `string` | `'More'` | Label of the expand button |
| `readLessText` | `string` | `'Less'` | Label of the collapse button |
| `onAction` | `() => void` | — | Called when the read-more button is clicked, in addition to expanding |

TypeScript users: the props type is exported as `ReadMoreTextProps`.

## Styling

Override these classes to restyle the component:

| css class | description |
|-----------|-------------|
| `rm-container` | Main container |
| `rm-text-wrapper` | Text wrapper |
| `rm-typography` | The text paragraph |
| `rm-action-button-container` | Action button container |
| `rm-more-button` | Read-more button |
| `rm-less-button` | Read-less button |

## Notes

- `type="html"` uses `dangerouslySetInnerHTML`. Never pass untrusted user input without sanitizing it first (e.g. with [DOMPurify](https://github.com/cure53/DOMPurify)).
- Clamping relies on `-webkit-line-clamp`, which is supported by all modern browsers.

## License

MIT

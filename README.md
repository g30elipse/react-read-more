# react-read-more

A react component for long text that needs read more/less functionality.

##### props
| props    | signature               | required       | description |
|------    | --------------         | ----           | ----------- |
| text | string | true           | text to be displayed with read more/less |
| lines | number | false           | number of lines to be showed when in collapsed state (default: 3) |
| type | 'plainText', 'html' | false           | type of the text. It can be either plain text string or an html string |
| readMoreText | string | false           | Read more button text (default: More) |
| readLessText | string | false           | Read less button text (default: Less) |
| onAction    | () => void                  | false           | If passed, this method will be called when Read more button is clicked  |



#### Example
```typescript
import ReadMoreText from 'read-more-less-react';
```

```jsx
<ReadMoreText
    lines={5}
    text={TEXT}
/>
```

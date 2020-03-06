# React read more/less

A react component for long text that needs read more/less functionality.
#### Note
Do not forget to import the styling `import 'read-more-less-react/dist/index.css'`;



##### props
| props    | signature               | required       | description |
|------    | --------------         | ----           | ----------- |
| text | string | true           | Text to be displayed with read more/less |
| lines | number | false           | Number of lines to be showed when in collapsed state (default: 3) |
| type | 'plainText', 'html' | false           | Type of the text. It can be either plain text string or an html string |
| readMoreText | string | false           | Read more button text (default: More) |
| readLessText | string | false           | Read less button text (default: Less) |
| onAction    | () => void                  | false           | If passed, this method will be called when Read more button is clicked  |


##### classes
| css class | description |
|----- | ----- |
|rm-container | Main container class |
|rm-text-wrapper | Text wrapper class |
|rm-typography | Text class |
|rm-action-button-container | Action button container class |
|rm-more-button | Action button class |


[Codesandbox demo](https://codesandbox.io/s/happy-cache-x4rhs?fontsize=14&hidenavigation=1&theme=dark)


#### Example
```typescript
import ReadMoreText from 'read-more-less-react';
import 'read-more-less-react/dist/index.css'
```

```jsx
<ReadMoreText
    lines={5}
    text={TEXT}
/>
```

#### Note
Do not forget to import the styling `import 'read-more-less-react/dist/index.css'`;
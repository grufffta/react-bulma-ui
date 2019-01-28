### Tabs
Simple responsive horizontal navigation tabs, with different styles
The default tabs style has a single border at the bottom.

Tabs can  be alligned with the ```position``` attribute, the default tab style is a single bottom border.
Icons can be used in tabs but FA is not loaded in styleguide

```jsx
<Tabs position="centered" size="large">
    <TabItem>Hello</TabItem>
    <TabItem active={ true }>Another</TabItem>
    <TabItem>Last</TabItem>
</Tabs>
```

### Styles #
You can combine different modifiers

If you want a more classic style with borders, just append the ```boxed```modifier.
```jsx
<Tabs boxed>
    <TabItem>Hello</TabItem>
    <TabItem active={ true }>Another</TabItem>
    <TabItem>Last</TabItem>
</Tabs>
```

If you want mutually exclusive tabs (like radio buttons where clicking one deselects all other ones), use the ```toggled``` modifier.
```jsx
<Tabs boxed toggled>
    <TabItem>Hello</TabItem>
    <TabItem active={ true }>Another</TabItem>
    <TabItem>Last</TabItem>
</Tabs>
```

If you use both ```rounded``` and ```toggled```, the first and last items will be rounded.
```jsx
<Tabs toggled rounded>
    <TabItem>Hello</TabItem>
    <TabItem active={ true }>Another</TabItem>
    <TabItem>Last</TabItem>
</Tabs>
```

If you want the tabs to take up the whole width available, use ```fullwidth```
```jsx
<Tabs fullwidth>
    <TabItem>Hello</TabItem>
    <TabItem active={ true }>Another</TabItem>
    <TabItem>Last</TabItem>
</Tabs>
```

### Sizes #
The tabs comes in 3 additional sizes.
You only need to set the size ```small```, ```medium```, or ```large``` to the tabs component.

```jsx
<Tabs size="small">
    <TabItem>Hello</TabItem>
    <TabItem active={ true }>Another</TabItem>
    <TabItem>Last</TabItem>
</Tabs>
```

```jsx
<Tabs size="medium">
    <TabItem>Hello</TabItem>
    <TabItem active={ true }>Another</TabItem>
    <TabItem>Last</TabItem>
</Tabs>
```

```jsx
<Tabs size="large">
    <TabItem>Hello</TabItem>
    <TabItem active={ true }>Another</TabItem>
    <TabItem>Last</TabItem>
</Tabs>
```
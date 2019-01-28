### Pagination
A responsive, usable, and flexible pagination

```jsx
<Pager textNext=">>" textPrevious="<<" showIncrementalButtons pages={ 10 }>
    data rows here
</Pager>
```

By default on tablet, the list is located on the left, and the previous/next buttons on the right. But you can change the order of these elements by using the is-centered and is-right modifiers.

```jsx
<Pager position='centered' textNext=">>" textPrevious="<<" showIncrementalButtons pages={ 5 }>
    data rows here
</Pager>
```
```jsx
<Pager position='right' textNext=">>" textPrevious="<<" showIncrementalButtons pages={ 4 }>
    data rows here
</Pager>

```
### Styles #
Since
0.6.2
Add the ```rounded``` modifier to have rounded pagination items.

```jsx
<Pager pages={ 3 } rounded>
    data rows here
</Pager>
```

### Sizes #
The pagination comes in 3 additional sizes.
You only need to set the size tp ```small```, ```medium```, or ```large``` to the pagination component.

```jsx
<Pager showIncrementalButtons pages={ 2 } size='small'>
    data rows here
</Pager>
```
```jsx
<Pager showIncrementalButtons pages={ 2 } size='medium'>
    data rows here
</Pager>
```
```jsx
<Pager showIncrementalButtons pages={ 2 } size='large'>
    data rows here
</Pager>
```
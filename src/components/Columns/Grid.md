## Columns powered by Flexbox 
A simple way to build responsive columns

### Basics

Building a columns layout with Bulma is very simple:
1. Add a ```<Grid>``` container
2. Add as many ```<Column>``` elements as you want

Each column will have an equal width, no matter the number of columns.

```jsx
<Grid>
  <Column>
    First column
  </Column>
  <Column>
    Second column
  </Column>
  <Column>
    Third column
  </Column>
  <Column>
    Fourth column
  </Column>
</Grid>
```

### Sizes

If you want to change the size of a single column, you can use one of the following classes:
* ```three-quarters ```
* ```two-thirds ```
* ```half```
* ```one-third ```
* ```one-quarter ```
* ```full```
* ```four-fifths ```
* ```three-fifths ```
* ```two-fifths ```
* ```one-fifth ```

The other columns will fill up the remaining space automatically.

```jsx
<Grid>
  <Column size='four-fifths'>is-four-fifths</Column>
  <Column>Auto</Column>
  <Column>Auto</Column>
</Grid>

<Grid>
  <Column size='three-quarters'>is-three-quarters</Column>
  <Column>Auto</Column>
  <Column>Auto</Column>
</Grid>

<Grid>
  <Column size='two-thirds'>is-two-thirds</Column>
  <Column>Auto</Column>
  <Column>Auto</Column>
</Grid>

<Grid>
  <Column size='three-fifths'>is-three-fifths</Column>
  <Column>Auto</Column>
  <Column>Auto</Column>
</Grid>

<Grid>
  <Column size='half'>is-half</Column>
  <Column>Auto</Column>
  <Column>Auto</Column>
</Grid>

<Grid>
  <Column size='two-fifths'>is-two-fifths</Column>
  <Column>Auto</Column>
  <Column>Auto</Column>
</Grid>

<Grid>
  <Column size='one-third'>is-one-third</Column>
  <Column>Auto</Column>
  <Column>Auto</Column>
</Grid>

<Grid>
  <Column size='one-quarter'>is-one-quarter</Column>
  <Column>Auto</Column>
  <Column>Auto</Column>
</Grid>

<Grid>
  <Column size='one-fifth'>is-one-fifth</Column>
  <Column>Auto</Column>
  <Column>Auto</Column>
</Grid>
```

####

As the grid can be divided into 12 columns, there are size classes for each division: 1 - 12

#### Offset 

While you can use empty columns (like ```<Column />```) to create horizontal space around .column elements, you can also use offset property.

###### Mobile columns 

By default, columns are only activated from tablet onwards. This means columns are stacked on top of each other on mobile. 
If you want columns to work on mobile too, just add the ```visibleon='mobile``` attribute

```jsx
<Grid visibleon='mobile'>
  <Column size='half' offset='one-quarter'>half sie, offset one quarter</Column>
</Grid>

<Grid visibleon='mobile'>
  <Column size='three-fifths' offset='one-fifth'>three fiths, offset 1/5</Column>
</Grid>

<Grid visibleon='mobile'>
  <Column size={4} offset={8}>is 4, offset 8</Column>
</Grid>

<Grid visibleon='mobile'>
  <Column size={11} offset={1}>size 11, offset 1</Column>
</Grid>
```

#### Narrow Column

If you want a column to only take the space it needs, use the ```narrow``` modifier. The other column(s) will fill up the remaining space.

```jsx
<Grid>
  <Column narrow>
    <div className="box" style={{width: "200px"}}>
      <Title size={5}>Narrow column</Title>
      <Title subtitle>This column is only 200px wide.</Title>
    </div>
  </Column>
  <Column>
    <Box>
      <Title size={5}>Flexible column</Title>
      <Title subtitle>This column will take up the remaining space available.</Title>
    </Box>
  </Column>
</Grid>
```
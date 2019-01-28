### Container
A simple container to center your content horizontally

The ```container``` class can be used in any context, but mostly as a direct child of either:

* ```<NavBar>```
* ```<Hero>```
* ```<Section>```
* ```<Footer>```

The containers width for each breakpoint is the result of: ```$device - (2 * $gap)```. The ```$gap``` variable has a default value of **32px** but can be modified.

This is how the container will behave:

on ```$desktop``` it will have a maximum width of **960px**.
on ```$widescreen``` it will have a maximum width of **1152px**.
on ```$fullhd``` it will have a maximum width of **1344px**.

The values **960**, **1152** and **1344** have been chosen because they are divisible by both 12 and 16.

```jsx
<Container>
  <Notification>
    This container is <strong>centered</strong> on desktop.
  </Notification>
</Container>
```

#### Fluid container
If you don't want to have a maximum width but want to keep the 32px margin on the left and right sides, add the ```fluid``` modifier:

```jsx
<Container fluid>
  <Notification>
    This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
    viewport size.
  </Notification>
</Container>
```

#### Breakpoint containers
With the two breakpoint attribute, ```widescreen``` and ```fullhd```, you can have a fullwidth container until those specific breakpoints.

```jsx
<Container breakpoint='widescreen'>
  <Notification>
    This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
  </Notification>
</Container>
```
```jsx
<Container breakpoint='fullhd'>
  <Notification>
    This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
  </Notification>
</Container>
```
### Breadcrumb 
A simple breadcrumb component to improve your navigation experience 

```jsx
<Breadcrumb size='medium' seperator='succeeds'>
  <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  <BreadcrumbLink href='#'>Customers</BreadcrumbLink>
  <BreadcrumbLink href='#' active aria-current='page'>Orders</BreadcrumbLink>
</Breadcrumb>
```
For alternative alignments, use the position argument
```jsx
<Breadcrumb size='small' position='centered'>
  <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  <BreadcrumbLink href='#'>Customers</BreadcrumbLink>
  <BreadcrumbLink href='#' active aria-current='page'>Orders</BreadcrumbLink>
</Breadcrumb>
```
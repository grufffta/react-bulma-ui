Native HTML Progress Bars
```jsx
<Progress value={15} max={100}>15%</Progress>
```
All standard colours are supported, for example
```jsx
<Progress value={15} max={100} color='primary'>15%</Progress>
<Progress value={30} max={100} color='info'>30%</Progress>
<Progress value={45} max={100} color='success'>45%</Progress>
<Progress value={60} max={100} color='danger'>15%</Progress>
<Progress value={75} max={100} color='warning'>15%</Progress>
<Progress value={85} max={100} color='dark'>15%</Progress>
<Progress value={100} max={100} color='light'>15%</Progress>
```
Sizes
```jsx
<Progress value={15} max={100} size='small'>15%</Progress>
<Progress value={30} max={100}>15%</Progress>
<Progress value={45} max={100} size='medium'>15%</Progress>
<Progress value={60} max={100} size='large'>15%</Progress>
```
Intermediate when value is not supplied (coming in 0.7.3)
```jsx
<Progress max={100}>15%</Progress>
```
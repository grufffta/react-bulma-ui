## Hero
An imposing hero banner to showcase something

The hero component allows you to add a full width banner to your webpage, which can optionally cover the full height of the page as well.

The basic requirement of this component are:
For the full height hero to work, you will also need a header and footer.

```jsx
<Hero title='Hero Title' subtitle='Hero Subtitle' />
```

### Colors

You can choose from 7 colors
```jsx
<Hero title='Primary Title' subtitle='Primary Subtitle' color='primary'/>
<Hero title='Info Title' subtitle='Info Subtitle' color='info'/>
<Hero title='Success Title' subtitle='Sucess Subtitle' color='success'/>
```

#### Gradients

By adding the ```gradient``` modifier, you can generate a subtle **gradient**

```jsx
<Hero title='Dark Grdient Title' subtitle='Dark Subtitle' color='dark' gradient/>
<Hero title='Light Gradient Title' subtitle='Light Subtitle' color='light' gradient/>
<Hero title='Link Gradient Title' subtitle='Link Subtitle' color='link' gradient/>
```

### Sizes

Heros come in 4 additional sizes, ```small```, ```medium```, ```large``` and ```fullheight```

```jsx
<Hero title='Small Title' subtitle='Primary Subtitle' color='primary' size='small'/>
```

```jsx
<Hero title='Medium Title' subtitle='Primary Subtitle' color='primary' size='medium'/>
```
```jsx
<Hero title='Large Title' subtitle='Primary Subtitle' color='primary' size='large'/>
```
```jsx
<Hero title='Full Height Title' subtitle='Primary Subtitle' color='primary' size='fullheight'/>
```
If you are using a fixed navbar, you can use the ```fullheight-with-navbar``` size on the hero for it to occupy the viewport height minus the navbar height.

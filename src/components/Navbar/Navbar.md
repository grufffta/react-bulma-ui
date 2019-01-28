## Navbar
#### A responsive horizontal **navbar** that can support images, links, buttons, and dropdowns

The navbar component is a responsive and versatile horizontal navigation bar with the following structure:

* ```Navbar``` the main container
  - brand the left side, always visible, which usually contains the logo and optionally some links or icons, 
    it can accept strings, or ```NavbarLink``` elements and multiple items using ```React.ReactFragment``` ```<>/</>```
* ```NavbarBurger``` the hamburger icon, which toggles the navbar menu on touch,or, mobile devices, when active the icon will turn into a cross.
* ```NavbarSection``` holds a collection of nav items, mutliple items can be passed using fragments
  - ```position``` 'brand' - the brand area of the navigation bar, always visible
  - ```position``` 'start' - the left part of the menu, which appears next to the navbar brand on desktop, hidden on mibile
  - ```position``` 'end' - the right part of the menu, which appears at the end of the navbar, hidden on mobile

navbar items be an ```a```, ```p```, a ```div``` or one of the following

* NavbarLink represents a link, or link within a dropdown menu

* Dropdown - the dropdown menu, which can include navbar items and dividers, marked wiht navbar propert
Navbar-divider a horizontal line to separate navbar items

### Basic Navbar
To **get started quickly**, here is what a complete basic navbar looks like:

```jsx
<Navbar aria-label="main navigation"
  brand={<NavbarLink href="https://bulma.io">
            <Image navbar src="https://bulma.io/images/bulma-logo.png" />
        </NavbarLink>}>
    <NavbarSection position='start' tabs>
        <NavbarLink active>Home</NavbarLink>
        <NavbarLink>Documentation</NavbarLink>
        <Dropdown hoverable navbar text='Mode'>
            <DropdownLink navbar>About</DropdownLink>
            <DropdownDivider navbar/>
            <DropdownLink navbar>Report an Issue</DropdownLink>
        </Dropdown>
    </NavbarSection>
    <NavbarSection position='end' tabs>
        <ButtonList navbar>
            <Button color='primary'><strong>Sign Up</strong></Button>
            <Button color='light'>Log in</Button>
        </ButtonList>
    </NavbarSection>
</Navbar>
```

### Navbar Brand
Using a brand fragment, it can contain a number of navbar items.
The navbar brand is **always visible:** on both touch devices < 1024px and desktop >= 1024px . As a result, it is recommended to only use a few navbar items to avoid **overflowing** horizontally on small devices.
On desktop >= ```1024px``` , the navbar brand will only take up the space it needs.

```jsx
<Navbar aria-label='main navigation' color='link'
    brand={<>
        <NavbarLink>
            <Image navbar src='https://bulma.io/images/bulma-logo.png' alt='Bulma: Free, open source, & modern CSS framework based on Flexbox' />
        </NavbarLink>
        Welcome
        </>}>    
</Navbar>
```

Simple string brand
```jsx
<Navbar aria-label='main navigation' color='dark'
    brand='UI'>    
</Navbar>
```

Or a single NavbarLink
```jsx
<Navbar aria-label='main navigation' color='light'
    brand={
        <NavbarLink>
            <Image navbar src='https://bulma.io/images/bulma-logo.png'alt='Bulma: Free, open source, & modern CSS framework based on Flexbox' /> 
        </NavbarLink> }>
</Navbar>
```

### Right Dropdown

If your parent navbar item is on the right side, you can position the dropdown to start from the right with the is-right modifier.
```jsx
<Navbar role="navigation" aria-label="dropdown navigation">
    <NavbarSection position='start'>
      <Dropdown hoverable navbar text='Left'>
            <DropdownLink navbar>Overview</DropdownLink>
            <DropdownLink navbar>Elements</DropdownLink>
            <DropdownDivider navbar/>
            <DropdownLink navbar>Version 0.7.2</DropdownLink>
        </Dropdown>
    </NavbarSection>
    <NavbarSection position='end'>
        <Dropdown active right navbar text='RIght'>
            <DropdownLink navbar>Overview</DropdownLink>
            <DropdownLink navbar>Elements</DropdownLink>
            <DropdownDivider navbar/>
            <DropdownLink navbar>Version 0.7.2</DropdownLink>
        </Dropdown>
    </NavbarSection>
</Navbar>
```
### Panel
A composable panel, for compact controls

The panel is container for several types:

* ```PanelTabs``` for navigation
* ```PanelBlocks``` which can contain other elements, like:
  - control
  - input
  - button
  - icon

The ```PanelBlock``` can be an anchor tag ```<PanelLink>``` or a label ```<PanelLabel>``` with a checkbox inside.
```jsx
<Panel heading="Navigation">
    <PanelTabs>
    <a>Home</a>
    <a>Forward</a>
    </PanelTabs>
    <PanelLabel text="some text" />
    <PanelLink active={ true }>Linkage</PanelLink>
</Panel>
```

```jsx
<Panel heading='repositories'>  
    <PanelBlock>
    <Input
      iconLeft={<Icon name='search' />}
      type='text' placeholder='search' />        
    </PanelBlock>
    <PanelTabs>
        <PanelLink tab active>all</PanelLink>
        <PanelLink tab>public</PanelLink>
        <PanelLink tab>private</PanelLink>
        <PanelLink tab>sources</PanelLink>
        <PanelLink tab>forks</PanelLink>
    </PanelTabs>    
    <PanelLink active>
        <Icon name='book' panel /> bulma
    </PanelLink>
    <PanelLink>
        <Icon name='book' panel /> marksheet
    </PanelLink>
    <PanelLink>
        <Icon name='book' panel /> minireset.css
    </PanelLink>
    <PanelLink>
        <Icon name='book' panel /> jgthms.github.io
    </PanelLink>
    <PanelLink>
        <Icon name='code-branch' panel /> daniellowtw/infboard
    </PanelLink>
    <PanelLink>
        <Icon name='code-branch' panel /> mojs
    </PanelLink> 
    <PanelLabel text='remember me' checkbox /> 
    <PanelBlock>
        <Button color='link' outlined fullwidth>
            reset all filters
        </Button>
    </PanelBlock>
</Panel>
```
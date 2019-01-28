## Dropdown
#### An interactive dropdown menu for discoverable content

The dropdown component is a container for a dropdown button and a dropdown menu. 
* Dropdown the main container 
* DropdownContent the dropdown box, with a white background and a shadow 
* DropdownDivider a horizontal line to separate dropdown items 
* DropdownLink each single link in the drop down

The dropdown can also be active all the time by using the ```active``` property to allow you to control the menu from higher components or ```hoverable``` to show on mouse over

```jsx
<Dropdown text='Dropdown Menu' hoverable>
    <DropdownContent><p>Some normal text</p></DropdownContent>
    <DropdownContent>
        <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
    </DropdownContent>
    <DropdownDivider />
    <DropdownLink>A Link</DropdownLink>
    <DropdownDivider />
    <DropdownLink active>An Active Link</DropdownLink>
</Dropdown>
```      

You can use the ```right``` property to right-align the drop down

```jsx
<Dropdown text='Dropdown Menu' hoverable>    
    <DropdownContent>
        <p>The dropdown is <strong>left-aligned</strong> by default.</p>
    </DropdownContent>
</Dropdown>
<Dropdown text='Dropdown Menu' hoverable right>    
    <DropdownContent>
        <p>Add the <code>is-right</code> modifier for a <strong>right-aligned</strong> dropdown.</p>
    </DropdownContent>
</Dropdown>
```

You can use the ```dropup``` property to have a dropdown menu that appears above the dropdown button. 

```jsx
<Dropdown text='Dropup Menu' hoverable right dropup>    
    <DropdownContent>
        <p>You can add the <code>dropup</code> modifier to have a dropdown menu that appears above the dropdown button.</p>
    </DropdownContent>
</Dropdown>
```
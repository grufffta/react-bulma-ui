# A simple sidebar menu component
```jsx
<Menu>
  <MenuLabel text='General' />
  <MenuList>
    <MenuLink>Dashboard</MenuLink>
    <MenuLink>Customers</MenuLink>
  </MenuList>
  <MenuLabel text='Administration' />  
  <MenuList>
    <MenuLink>Team Settings</MenuLink>
    
    <MenuLink active>Manage Your Team
        <MenuLink>Members</MenuLink>
        <MenuLink>Plugins</MenuLink>
        <MenuLink>Add a member</MenuLink>
    </MenuLink>
    
    <MenuLink>Invitations</MenuLink>
    <MenuLink>Cloud Storage Environment Settings</MenuLink>
    <MenuLink>Authentication</MenuLink>
  </MenuList>
  <MenuLabel text='Transactions' />
  <MenuList>
    <MenuLink>Payments</MenuLink>
    <MenuLink>Transfers</MenuLink>
    <MenuLink>Balance</MenuLink>
  </MenuList>
</Menu>
```
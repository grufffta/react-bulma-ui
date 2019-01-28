Tables can headered bold cells, with abbreviations
Tables can be striped
```jsx
<Table striped
  header={
    <Row>
      <HeaderCell text='Position' abbreviated='Pos' />
      <HeaderCell>Team</HeaderCell>
      <HeaderCell text="Won" abbreviated='W' />
      <HeaderCell text="Drawn"abbreviated='D'/>
      <HeaderCell text="Lost" abbreviated='L' />
      <HeaderCell text="Goals for" abbreviated='GF' />      
    </Row>}>  
</Table>
```
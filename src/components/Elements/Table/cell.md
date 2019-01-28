Tables can have normal cells, with abbreviations
Table can have borders
```jsx
<Table bordered
  header={
    <Row>
      <Cell text='Position' abbreviated='Pos' />
      <Cell>Team</Cell>
      <Cell text="Won" abbreviated='W' />
      <Cell text="Drawn"abbreviated='D'/>
      <Cell text="Lost" abbreviated='L' />
      <Cell text="Goals for" abbreviated='GF' />      
    </Row>}> 
    <Row>
      <Cell heading>2</Cell>
      <Cell><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></Cell>
      <Cell>38</Cell>
      <Cell>20</Cell>
      <Cell>11</Cell>
      <Cell>7</Cell>      
    </Row>     
</Table>
```
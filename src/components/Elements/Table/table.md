The inevitable HTML table, with special case cells
Tables can be bordered and striped
```jsx
<Table bordered striped
  header={
    <Row>
      <HeaderCell text='Position' abbreviated='Pos' />
      <HeaderCell>Team</HeaderCell>
      <HeaderCell text="Won" abbreviated='W' />
      <HeaderCell text="Drawn"abbreviated='D'/>
      <HeaderCell text="Lost" abbreviated='L' />
      <Cell text="Goals for" abbreviated='GF' />
      <Cell text="Goals against" abbreviated='GA' />
      <Cell text="Goal difference" abbreviated='GD' />
      <Cell heading text="Points" abbreviated='Pts' />
      <Cell>Qualification or relegation</Cell>
    </Row>}
  footer={
    <Row>
      <Cell text='Position' abbreviated='Pos' />
      <Cell>Team</Cell>
      <Cell text="Played" abbreviated='Pld' />
      <Cell text="Won" abbreviated='W' />
      <Cell text="Drawn"abbreviated='D'/>
      <Cell text="Lost" abbreviated='L' />
      <Cell text="Goals for" abbreviated='GF' />
      <Cell text="Goals against" abbreviated='GA' />
      <Cell text="Goal difference" abbreviated='GD' />
      <Cell text="Points" abbreviated='Pts' />
      <Cell>Qualification or relegation</Cell>
    </Row>}>
    <Row>
      <Cell heading>1</Cell>
      <Cell><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> </Cell>
      <Cell>38</Cell>
      <Cell>23</Cell>
      <Cell>12</Cell>
      <Cell>3</Cell>
      <Cell>68</Cell>
      <Cell>36</Cell>
      <Cell>+32</Cell>
      <Cell>81</Cell>
      <Cell>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></Cell>
    </Row>
    <Row>
      <Cell heading>2</Cell>
      <Cell><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></Cell>
      <Cell>38</Cell>
      <Cell>20</Cell>
      <Cell>11</Cell>
      <Cell>7</Cell>
      <Cell>65</Cell>
      <Cell>36</Cell>
      <Cell>+29</Cell>
      <Cell>71</Cell>
      <Cell>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></Cell>
    </Row>
    <Row>
      <Cell heading>3</Cell>
      <Cell><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></Cell>
      <Cell>38</Cell>
      <Cell>19</Cell>
      <Cell>13</Cell>
      <Cell>6</Cell>
      <Cell>69</Cell>
      <Cell>35</Cell>
      <Cell>+34</Cell>
      <Cell>70</Cell>
      <Cell>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></Cell>
    </Row>
    <Row selected>
      <Cell heading>4</Cell>
      <Cell><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></Cell>
      <Cell>38</Cell>
      <Cell>19</Cell>
      <Cell>9</Cell>
      <Cell>10</Cell>
      <Cell>71</Cell>
      <Cell>41</Cell>
      <Cell>+30</Cell>
      <Cell>66</Cell>
      <Cell>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a></Cell>
    </Row>
    <Row>
      <Cell heading>5</Cell>
      <Cell><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a></Cell>
      <Cell>38</Cell>
      <Cell>19</Cell>
      <Cell>9</Cell>
      <Cell>10</Cell>
      <Cell>49</Cell>
      <Cell>35</Cell>
      <Cell>+14</Cell>
      <Cell>66</Cell>
      <Cell>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></Cell>
    </Row>
    <Row>
      <Cell heading>6</Cell>
      <Cell><a href="https://en.wikipedia.org/wiki/SouCell headingampton_F.C." title="SouCell headingampton F.C.">SouCell headingampton</a></Cell>
      <Cell>38</Cell>
      <Cell>18</Cell>
      <Cell>9</Cell>
      <Cell>11</Cell>
      <Cell>59</Cell>
      <Cell>41</Cell>
      <Cell>+18</Cell>
      <Cell>63</Cell>
      <Cell>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></Cell>
    </Row>
</Table>
```
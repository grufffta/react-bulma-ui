## Form controls 
All generic form controls, designed for consistency

```jsx
<Field label='Name'>
    <Input type='text' placeholder='Text Input' />
</Field>

<Field label='Username'>  
  <Input color='success' type="text"
    iconLeft={<Icon name='user' />}
    iconRight={<Icon name='check' />}
    placeholder="Text input" value="bulma"
    helpColor='success' help ='This username is available' />
</Field>

<Field label='Email'>
  <Input color='danger' type='email'
    iconLeft={<Icon name='envelope' />}
    iconRight={<Icon name='exclamation-triangle' />}
    placeholder='Email Input' value='hello@'
    helpColor='danger' help='This email is invalid' />
</Field>

<Field label='Email'>
  <Select>
    <option>Select dropdown</option>
    <option>With options</option>
  </Select>
</Field>

<Field label='Message'>
  <TextArea placeholder='text area' />
</Field>

<Field>
  <Checkbox>
    I agree to the <a href="#">terms and conditions</a>
  </Checkbox>
</Field>
<Field>
  <Radio>
    <RadioItem name='question' value='Yes' />
    <RadioItem name='question' value='No' checked/>
  </Radio>
</Field>
<Field grouped>
  <Control>
    <Button color='link'>Submit</Button>    
  </Control>
  <Control>
    <Button color='text'>Cancel</Button>    
  </Control>
</Field>
```
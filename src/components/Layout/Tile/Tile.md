# Tiles
A single ```tile``` element to build 2-dimensional Metro-like, Pinterest-like, or whatever-you-like grids

To build intricate 2-dimensional layouts, you only need a single element: the ```tile```:

Tiles are wrapped by an ```ancestor``` and contain a number of ```parent``` descendants,the ```parent``` children make up the child leaf nodes and are marked with a ```tile``` attribute.

```jsx
<Tile context='ancestor'>
  <Tile vertical size={8}>
    <Tile>
      <Tile context='parent' vertical>
          <Notification color='primary' tile>
            <Title>Vertical...</Title>
            <Title subtitle>Top tile</Title>
          </Notification>
          <Notification color='danger'>
            <Title>...tiles</Title>
            <Title subtitle>Bottom tile</Title>
          </Notification>
      </Tile>
      <Tile context='parent'>
        <Notification color='info' tile>
          <Title>Middle tile</Title>
          <Title subtitle>With an image</Title>
          <Image dimensions='4by3' src="https://bulma.io/images/placeholders/640x480.png" />
        </Notification>
      </Tile>
    </Tile>
    <Tile context='parent'>
      <Notification color='danger' tile>
        <Title>Wide tile</Title>
        <Title subtitle>Aligned with the right tile</Title>
        <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        </Content >
      </Notification>
    </Tile>
  </Tile>
  <Tile context='parent'>
    <Notification color='success' tile>
      <Content>
        <Title>Tall tile</Title>
        <Title subtitle>With even more content</Title>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.

          Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.

          Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
        </Content>
      </Content>
    </Notification>
  </Tile>
</Tile>
```
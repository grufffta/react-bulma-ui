## Media Object 
#### The famous media object prevalent in social media interfaces, but useful in any context 

The media object is a UI element perfect for repeatable and nestable content.

```jsx
    <Media src='https://bulma.io/images/placeholders/128x128.png' onDelete={()=>true}>
        <Content>
            <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        </p>
        </Content>
    </Media>
```

You can also nest Media objects up to 3 levels deep

```jsx
    <Media src='https://bulma.io/images/placeholders/128x128.png' onDelete={()=>true}>
        <Content>
            <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        </p>            
        </Content>        
        <Media src='https://bulma.io/images/placeholders/128x128.png' onDelete={()=>true}>
            <Content>
                <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </p>
            </Content>
            <Media>
                <Content>
                    <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    </p>
                </Content>
            </Media>
        </Media>
        <Media src='https://bulma.io/images/placeholders/128x128.png' onDelete={()=>true}>
            <Content>
                <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </p>
            </Content>
        </Media>
    </Media>
```
## Level 

A multi-purpose horizontal level, which can contain almost any other element 

The **structure** of a level is the following:

* Level the main container
* Level section, either left, right or centered section

In a level-item, you can then insert _almost anything_ you want: a title, a button, a text input, or just simple text. No matter what elements you put inside a Bulma level, they will always be **vertically centered**.

```jsx
<Level>  
  <LevelSection position='left'>    
    <Title subtitle size={5}>
      <strong>123</strong> posts
    </Title>        
    <Field attached>
      <Input  type="text" placeholder="Find a post" />
      <Control>
        <Button>Search</Button>
      </Control>
    </Field>
  </LevelSection>
  <LevelSection position='right'>    
      <strong>All</strong>
      <a>Published</a>
      <a>Drafts</a>
      <a>Deleted</a>
      <Button color='success'>New</Button>
  </LevelSection>
</Level>
```
### Centered Level
If you want a centered level add the ```centered``` attribute to leve, you can use as many level-item as you want, as long as they are direct children of the ```level``` container. 

```jsx
<Level>
  <LevelSection position='centered'>
    <div>
      <Title heading>Tweets</Title>
      <Title subtitle>3,456</Title>
    </div>
    <div>
      <Title heading>Following</Title>
      <Title subtitle>123</Title>
    </div>
    <div>
      <Title heading>Followers</Title>
      <Title subtitle>456K</Title>
    </div>  
    <div>
      <Title heading>Likes</Title>
      <Title subtitle>789</Title>
    </div>
  </LevelSection>
</Level>
```

### Mobile Level

By default, for space concerns, the level is vertical on mobile. If you want the level to be horizontal on mobile as well, add the ```mobile``` modifier on the level container. 

```jsx
<Level mobile>
  <LevelSection position='centered'>
    <div>
      <Title heading>Tweets</Title>
      <Title subtitle>3,456</Title>
    </div>
    <div>
      <Title heading>Following</Title>
      <Title subtitle>123</Title>
    </div>
    <div>
      <Title heading>Followers</Title>
      <Title subtitle>456K</Title>
    </div>  
    <div>
      <Title heading>Likes</Title>
      <Title subtitle>789</Title>
    </div>
  </LevelSection>
</Level>
```
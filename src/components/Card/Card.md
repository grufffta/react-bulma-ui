# Card
The card component comprises several elements that you can mix and match

* Card: the main container 
* Header: a horizontal bar with a shadow and optinally centered 
* Image: a fullwidth container for a responsive image 
* Footer: a horizontal list of controls
```jsx
    <Card>
        <CardImage src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder image' />
        <CardContent>
            <Media src='https://bulma.io/images/placeholders/96x96.png' alt='Placeholder image'>
                <Content>
                    <Title size={4}>John Smith</Title>
                    <Title subtitle size={6}>@John Smith</Title>
                </Content>
            </Media>
            <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </Content>
        </CardContent>
    </Card>
```
A card can have a header, left justified, or centered with an icon to the right.
```jsx
    <Card>
        <CardHeader title='Component' centered icon={<Icon name='angle-down' />} />
        <CardContent>
            <Content>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </Content>
        </CardContent>
        <CardFooter>
            <a href="#">Save</a>
            <a href="#">Edit</a>
            <a href="#">Delete</a>
        </CardFooter>
    </Card>
```
```jsx
<Card>
    <CardContent>
        <Title>
            “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
        </Title>
        <Title subtitle>Jeff Atwood</Title>
    </CardContent>
    <CardFooter>
        <p>
            <span>View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a></span>
        </p>
        <p>
            <span>Share on <a href="#">Facebook</a></span>
        </p>
    </CardFooter>
</Card>
```
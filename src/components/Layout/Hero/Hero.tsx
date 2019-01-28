import './hero.scss'
import React, { FunctionComponent } from "react"
import { getColorStyle, getSizeStyle, StandardColor, Size } from "../../../props"
import classnames from "classnames"
import { Container } from '../Container';
import { Title } from '../../Elements';

interface HeroOwnProps {
  title: string
  subtitle?: string
  color?: StandardColor
  size?: Size
  fullheight?: boolean | 'fullheight-with-navbar'
  gradient?: boolean
  header?: JSX.Element
  footer?: JSX.Element
  tile?: boolean
}

export const Hero: FunctionComponent<HeroOwnProps> = (props) => (
  <section className={ classnames('hero',
    { 'is-bold': props.gradient },
    { 'is-fullheight': props.fullheight },
    { 'is-fullheight-with-navbar': props.fullheight === 'fullheight-with-navbar' },
    { 'tile is-child': props.tile },
    getColorStyle(props.color),
    getSizeStyle(props.size)) }>
    <div className='hero-body'>
      { props.header && <div className='hero-head'> { props.header }</div> }
      <Container>
        { props.title && <Title>{ props.title }</Title> }
        { props.subtitle && <Title subtitle>{ props.subtitle }</Title> }
      </Container>
      { props.footer && <div className='hero-foot'>{ props.footer }</div> }
    </div>
  </section>
)
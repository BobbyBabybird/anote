import React, { Fragment } from 'react'
import styled from 'styled-components'
import  { Heading2, Heading4, Text } from './Typo'

const Block = styled.div`
  text-align: center;
  padding: 80px 40px;
  max-width: 60%;
  margin: 0 auto;
  --margin-bottom: 40px;
  background-color: ${props => props.inverted ? 'khaki' : 'transparent'};
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    height: 100%;
    background-color: inherit;
    width: 100vw;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    height: 100%;
    background-color: inherit;
    width: 100vw;
  }
`

const Image = styled.div`
  width: 280px;
  height: 280px;
  display: block;
  margin: 0 auto;
  margin-bottom: 40px;
  border-radius: 9999px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`

const CenterBlock = ({ title, message, bg, image }) => (
  <Block inverted={bg}>
    {image && <Image image={image} />}
    <Heading2>{title}</Heading2>
    <Text>{message}</Text>
  </Block>
)

const Grid = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

const GridItem = styled.div`
  display: flex;
`

const GridItemText = styled.div`
  width: 50%;
  padding: 60px 20px;
`

const GridItemImage = styled.div`
  width: 50%;
  background-image: url(${props => props.bg && props.bg});
  background-size: cover;
  background-position: center;
`

const GridBlock = ({items}) => (
  <Grid>
  {items && items.map((item, i) => (
    <GridItem>
      {i % 2 === 0 ? (
        <Fragment>
          <GridItemText>
            <Heading4>{item.title}</Heading4>
            <Text>{item.message}</Text>
          </GridItemText>
          <GridItemImage bg={item.bg} />
        </Fragment>
      ) : (
        <Fragment>
          <GridItemImage bg={item.bg} />
          <GridItemText>
            <Heading4>{item.title}</Heading4>
            <Text>{item.message}</Text>
          </GridItemText>
        </Fragment>
      )}
    </GridItem>
  ))}
  </Grid>
)

export { CenterBlock, GridBlock };

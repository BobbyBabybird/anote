import React, { Fragment } from 'react'
import styled from 'styled-components'
import  { Heading2, Heading4, Text } from './Typo'

const Block = styled.div`
  text-align: center;
  padding: 80px 40px;
  max-width: 60%;
  margin: 0 auto;
  --margin-bottom: 40px;
`

const CenterBlock = ({ title, message }) => (
  <Block>
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

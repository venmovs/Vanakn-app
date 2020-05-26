import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { a } from 'react-spring'
import InfiniteSlider from './Slider'
import items from './items'
import './styles.css'

const Main = styled.div`
  height: 400px;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 70px 100px;
`

const Marker = styled.span`
  color: white;
  position: absolute;
  top: 0px;
  left: 140px;
  font-family: monospace;
`

const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
`

ReactDOM.render(
  <Main>
    <InfiniteSlider items={items} width={700} visible={3}>
      {({ css }, i) => (
        <Content>
          <Marker>{String(i).padStart(2, '0')}</Marker>
          <Image style={{ backgroundImage: css }} />
        </Content>
      )}
    </InfiniteSlider>
  </Main>,
  document.getElementById('root')
)

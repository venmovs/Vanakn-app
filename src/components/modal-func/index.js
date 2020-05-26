import React from 'react'
import styled from 'styled-components'
import { a } from 'react-spring'
import InfiniteSlider from './Slider'
import items from './items'

const Main = styled.div`
  height: 400px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 70px 100px;
`;


const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
`;

const Slider1 = () => {
    return(
        <Main>
            <InfiniteSlider items={items} width={700} visible={3}>
                {({ css }, i) => (
                    <Content>
                        <Image style={{ backgroundImage: css }} />
                    </Content>
                )}
            </InfiniteSlider>
        </Main>
    )
};

export default Slider1;

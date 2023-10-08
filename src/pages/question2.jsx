import React from 'react'
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import ImgSrc from '.././bg_tiin.png';
import Emoji from '../components/emoji';
import { px2vw } from '../responsive';
import { useSelector } from 'react-redux';
const containAnimation = keyframes`${fadeIn}`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${ImgSrc});
    background-size: cover;
    /* animation: 2s ${containAnimation}; */
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70%;
    text-align: center;
`;

const Title = styled.div`
    font-size: ${px2vw(30)};
    font-family: 'Quicksand', sans-serif;
    padding: 0;
    margin: 0;
`;

const Keyword = styled.span`
    font-size: ${px2vw(30)};
    font-family: 'Quicksand', sans-serif;
    padding: 0;
    margin: 0;
    font-weight: bold;
`;

const Question2 = () => {
    const location = useSelector((state) => state.answer.location);
    return (
        <Container>
            <Wrapper>
                <Title>
                    Bạn vui lòng đánh giá mức độ hài lòng của mình
                </Title>
                <Title>
                    về{' '}
                    <Keyword>
                        Phòng thử đồ và không gian mua sắm
                    </Keyword>
                </Title>
                <Title>
                tại cửa hàng:
                </Title>
                <Emoji index={3} location={location} />
            </Wrapper>
        </Container>
    )
}

export default Question2
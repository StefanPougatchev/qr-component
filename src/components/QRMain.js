import React from 'react';
import '../../src/index.css';
import styled from 'styled-components';
import qrImage from '../assets/images/image-qr-code.png';

const QRComponent = () => {
  return (
    <QRContainer>
      <MainContentContainer>
        <QRimage
          src={qrImage}
          alt='qr code'
        />
        <div>
          <Heading>Improve your front-end skills by building projects</Heading>
          <SubHeading>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </SubHeading>
        </div>
      </MainContentContainer>
    </QRContainer>
  );
};

const QRContainer = styled.div`
  background-color: white;
  box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.0476518);
  border-radius: 20px;
`;

const QRimage = styled.img`
  width: 288px;
  height: 288px;
  margin: 16px 16px 24px;
  border-radius: 10px;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 16px 40px;
  max-width: 288px;
`;

const Heading = styled.h1`
  font-family: OutFit;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27.72px;
  text-align: center;
  margin-bottom: 16px;
  margin-top: 0px;
`;

const SubHeading = styled.h2`
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.1875px;
  color: #7d889e;
  margin: 0px 16px 0px;
`;

export default QRComponent;

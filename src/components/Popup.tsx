import React from 'react';
import {Col, Row, Button} from 'antd';
import styled from 'styled-components';
import {Link} from 'react-static';
//
import telegram from '@images/telegram.svg';
import {device, size} from "@src/breakpoints";


const PopupArt = styled.div`
  height: 15%;
  width: 25%;
  background-color: #D7D7D7;
  text-align: center;
  font-size: 50;

  position: fixed;
  bottom: 20px;
  right: 20px;

  /*cool option borders.*/
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  /*animate. hide on load*/
  display: visible;
  z-index: 100;
  `;

/*text stuff*/
const Popuptext = styled.div`
  color: #000000;
  padding: 4px;`;

const PopupButton = styled(Button)`
  width: 80%;
`;


const PopupButtonText = styled.div`
color: #000000;
font-size: 15px;
/*padding makes the link like a bubble*/
padding: 10px;

img{
  fill: #ffffff;
}`;

class Popup extends React.Component {
  render() {
    return (
      <PopupArt  align="center">
        <Popuptext>Chat with us.</Popuptext>
        <Link to="https://t.me/Market_Protocol_Chat" target="_blank">
          <PopupButton type="primary">
            <PopupButtonText>
              <img alt="telegram" src={telegram} width="10%" fill="#FFFFFF"/>
                Join our Telegram.
            </PopupButtonText>
          </PopupButton>
        </Link>
      </PopupArt>
    );
  }
}
export default Popup;

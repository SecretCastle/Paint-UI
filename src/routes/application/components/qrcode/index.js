import React, { Component } from 'react'
import Qrcode from './components';

class QrcodeTest extends Component {
  render (){
    return (
      <div>
        <Qrcode value={'xxxxx'} filename={'test'}/>
        <Qrcode value={'xxxxx2222222xxxxx2222222xxxxx2222222xxxxx2222222xxxxx2222222'} filename={'test'}/>
      </div>
    )
  }
}

export default QrcodeTest;
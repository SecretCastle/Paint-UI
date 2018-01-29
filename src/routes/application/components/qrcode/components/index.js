import React, { Component } from 'react'
const QR = require('qrious');

class QRCodeTest extends Component {
  state = {
    timestamp: new Date().getTime(),
  }
  componentDidMount () {
    console.log(this.props);
    const { value, filename } = this.props;
    const qrcode = new QR({
      element: document.getElementById(this.state.timestamp + '_dom'),
      value,
      size: 1500,
      level: 'H',
      padding: 25,
      foregroundAlpha: 1
    });
    // console.log(new Buffer(qrcode.toDataURL(), 'base64'));
    this.downloadFile(filename+'.png', qrcode.toDataURL());
  }
  
  downloadFile(fileName, content) {
    let aLink = document.createElement('a');
    let blob = this.base64ToBlob(content); //new Blob([content]);

    let evt = document.createEvent("HTMLEvents");
    evt.initEvent("click", true, true);//initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
    aLink.download = fileName;
    aLink.href = URL.createObjectURL(blob);
    // aLink.dispatchEvent(evt);
    // aLink.click();
  }
  //base64转blob
  base64ToBlob(code) {
    let parts = code.split(';base64,');
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;
    let uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], {type: contentType});
  }

  render () {
    return (
      <canvas id={this.state.timestamp + '_dom'}></canvas>
    )
  }
}

export default QRCodeTest;
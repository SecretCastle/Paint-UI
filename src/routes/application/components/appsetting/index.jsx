import React, { PureComponent } from 'react'
import { CirclePicker, BlockPicker } from 'react-color';
import AutoWrite from './components/autowrite';
import { Button, Icon } from 'antd';

const styles = {
  container: {
    padding: '0 10px',
    display: 'flex'
  },
  leftside: {
    width: '25%',
    padding: '10px',
    minWidth: '300px'
  },
  leftPhone: {
    width: '300px',
    margin: '0 auto',
    background: 'url(http://oxraq92r6.bkt.clouddn.com/1ccb85eabbff435cf1d6e844f74f49c6.png) top 3px center',
    backgroundSize: '90%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '600px',
    padding: '90px 32px 90px 32px',
    boxSizing: 'border-box',
    textAlign: 'center'
  },
  rightside: {
    width: '75%',
    minWidth: '600px'
  },
  rightItem: {
    margin: '10px 0 30px 0'
  },
  rightItemSpan: {
    lineHeight: '40px'
  },
  coloradd: {
    width: '238px',
    position: 'relative',
    textAlign: 'center',
    transform: 'translate3d(-103px, 0, 0)'
  },
  showBlockPosition: {
    position: 'absolute',
    top: 60
  },
  uploadFrame: {
    display: 'inline-block',
    width: 100,
    height: 100,
    background: '#eee',
    border: '1px dotted #eee',
    textAlign: 'center',
    fontSize: '16px'
  }
}


class AppSetting extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      color: ['#4D4D4D', '#999999', '#F44E3B'],
      selectedcolor: '#000',
      showPicker: false
    }
  }

  selectedColor = (color, event) => {
    this.setState({
      selectedcolor: color.hex
    })
  }

  addColor = (color, event) => {
    if (!this.state.color.includes(color.hex)){
      let colors = this.state.color;
      colors.push(color.hex);
      this.setState({
        color: colors,
        selectedcolor: color.hex
      })
    } else {
      this.setState({
        selectedcolor: color.hex
      })
    }
  }

  showSelected = () => {
    this.setState({
      showPicker: !this.state.showPicker
    })
  }

  render () {
    return (
      <div style={styles.container}>
        <div style={styles.leftside}>
          <div style={styles.leftPhone}>
            <AutoWrite
              color={this.state.selectedcolor}
            />
          </div>
        </div>
        <div style={styles.rightside}>
          <div style={styles.rightItem}>
            <span style={styles.rightItemSpan}>应用配色</span>
            <CirclePicker
              colors = {this.state.color}
              circleSize = {30}
              onChange = {this.selectedColor}
            />
            <div style={styles.coloradd}>
              <Button
                style={{ margin: '10px 0 15px 0' }}
                shape={'circle'}
                onClick={this.showSelected}
              >
                <Icon type={this.state.showPicker ? 'minus' : 'plus'}/>
              </Button>
              {
                this.state.showPicker
                ? <div style={styles.showBlockPosition}>
                    <BlockPicker
                      width={238}
                      triangle={'top'}
                      onChange={this.addColor}
                    />
                  </div>
                : 
                  null
              }
            </div>
          </div>
          <div style={styles.rightItem}>
            <span style={styles.rightItemSpan}>图片设定</span>
            <div style={{
              margin: '0 0 20px 0'
            }}>
              <span>应用图标：</span>
              <span style={styles.uploadFrame}><Icon type="plus" /></span>
            </div>
            <div>
              <span>启动图片：</span>
              <span style={styles.uploadFrame}><Icon type="plus" /></span>
            </div>
          </div>
          <div style={styles.rightItem}>
            <Button type="primary">保存</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default AppSetting;

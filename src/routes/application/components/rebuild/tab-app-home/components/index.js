import React, { PureComponent } from 'react';
import { Form, Input, Select, Radio, Icon, Button } from 'antd';
import styles from './index.less';
import Translate from './config.json';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class InerPanel extends PureComponent {
  state = {
    titleDisabled: false
  }
  titleDisabled = () => {
    this.setState({
      titleDisabled: !this.state.titleDisabled
    });
  }
  render () {
    const { type } = this.props;
    return (
      <div>
        <Form>
          <FormItem
            label={Translate.title.titlebar[type]}
          >
            <span style={{ display:'block' }}>{Translate.title.radio.title[type]}</span>
            <RadioGroup
              defaultValue="yes"
              onChange={this.titleDisabled}
            >
              <Radio value="yes">{Translate.title.radio.radio.yes[type]}</Radio>
              <Radio value="no">{Translate.title.radio.radio.no[type]}</Radio>
            </RadioGroup>
            <span style={{display: 'block'}}>{Translate.title.input.title[type]}</span>
            <Input
              placeholder={Translate.title.input.placeholder[type]}
              style={{
                width: '250px'
              }}
              disabled={this.state.titleDisabled}
            />
          </FormItem>
          <FormItem
            label={Translate.weather.titlebar[type]}
          >
            <span style={{ display:'block' }}>{Translate.weather.radio.title[type]}</span>
            <RadioGroup
              defaultValue="yes"
            >
              <Radio value="yes">{Translate.weather.radio.radio.yes[type]}</Radio>
              <Radio value="no">{Translate.weather.radio.radio.no[type]}</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem
            label={Translate.button.titlebar[type]}
          >
            <span>{Translate.button.discription[type]}</span>
            <div>
              <span style={{display: 'block'}}>{Translate.button.input.title[type]}</span>
              <Input
                placeholder={Translate.button.input.placeholder[type]}
                style={{
                  width: '250px'
                }}
              />
            </div>
            <div>
              <span>{Translate.button.unselectedupload.title[type]}</span>
              <div className={styles.app_home_uploader}>
                <Icon type="plus"/>
                <span className={styles.clickText}>点击上传</span>
              </div>
            </div>
            <div>
              <span>{Translate.button.selectedupload.title[type]}</span>
              <div className={styles.app_home_uploader}>
                <Icon type="plus"/>
                <span className={styles.clickText}>点击上传</span>
              </div>
            </div>
          </FormItem>
          <FormItem>
            <Button type="primary">{type === 'cn' ? '保存' : 'Save'}</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default InerPanel;

import React, { PureComponent } from 'react'
import { Form, Input, Radio, Button } from 'antd';
import Translate from './config.json';

const FormItem = Form.Item;
const TextArea = Input.TextArea;
const RadioGroup = Radio.Group;

class InerPanel extends PureComponent {
  state = {
    showOnline: false,
    showWebsite: false,
    showFeedback: false
  }

  RadioFn = (type) => {
    switch (type) {
      case 'online':
        this.setState({
          showOnline: !this.state.showOnline
        })
        break;
      case 'website':
        this.setState({
          showWebsite: !this.state.showWebsite
        })
        break;
      case 'feedback':
        this.setState({
          showFeedback: !this.state.showFeedback
        })
        break;
      default:
        break;
    }
  }

  render () {
    const { type } = this.props;
    return (
      <Form>
        <FormItem
          label={Translate.company.titlebar[type]}
        >
          <TextArea
            autosize={
              {
                minRows: 6,
                maxRows: 6
              }
            }
            style={{
              width: '250px'
            }}
          />
        </FormItem>
        <FormItem
          label={Translate.hotline.titlebar[type]}
        >
          <span style={{display: 'block'}}>{Translate.hotline.radio.title[type]}</span>
          <RadioGroup
            defaultValue={"yes"}
            onChange={() => this.RadioFn('online')}
          >
            <Radio value={"yes"}>{Translate.hotline.radio.radio.yes[type]}</Radio>
            <Radio value={"no"}>{Translate.hotline.radio.radio.no[type]}</Radio>
          </RadioGroup>
          <span style={{ display:'block' }}>{Translate.hotline.inputtitle.title[type]}</span>
          <Input
            style={{width: '250px'}}
            placeholder={Translate.hotline.inputtitle.placeholder[type]}
            disabled={this.state.showOnline}
          />
          <span style={{ display:'block' }}>{Translate.hotline.inputphone.title[type]}</span>
          <Input
            style={{width: '250px'}}
            disabled={this.state.showOnline}
          />
        </FormItem>
        <FormItem
          label={Translate.website.titlebar[type]}
        >
          <span style={{display: 'block'}}>{Translate.website.radio.title[type]}</span>
          <RadioGroup
            defaultValue={"yes"}
            onChange={() => this.RadioFn('website')}
          >
            <Radio value={"yes"}>{Translate.website.radio.radio.yes[type]}</Radio>
            <Radio value={"no"}>{Translate.website.radio.radio.no[type]}</Radio>
          </RadioGroup>
          <span style={{ display:'block' }}>{Translate.website.inputtitle.title[type]}</span>
          <Input
            style={{width: '250px'}}
            placeholder={Translate.website.inputtitle.placeholder[type]}
            disabled={this.state.showWebsite}
          />
          <span style={{ display:'block' }}>{Translate.website.inputphone.title[type]}</span>
          <Input
            style={{width: '250px'}}
            disabled={this.state.showWebsite}              
          />
        </FormItem>
        <FormItem
          label={Translate.feedback.titlebar[type]}
        >
          <span style={{display: 'block'}}>{Translate.feedback.radio.title[type]}</span>
          <RadioGroup
            defaultValue={"yes"}
            onChange={() => this.RadioFn('feedback')}
          >
            <Radio value={"yes"}>{Translate.feedback.radio.radio.yes[type]}</Radio>
            <Radio value={"no"}>{Translate.feedback.radio.radio.no[type]}</Radio>
          </RadioGroup>
          <span style={{ display:'block' }}>{Translate.feedback.inputtitle.title[type]}</span>
          <Input
            style={{width: '250px'}}
            placeholder={Translate.feedback.inputtitle.placeholder[type]}
            disabled={this.state.showFeedback}
          />
          <span style={{ display:'block' }}>{Translate.feedback.inputphone.title[type]}</span>
          <Input
            style={{width: '250px'}}
            disabled={this.state.showFeedback}
          />
        </FormItem>
        <FormItem>
          <Button type="primary">{type === 'cn' ? '保存' : 'Save'}</Button>
        </FormItem>
      </Form>
    )
  }
}

export default InerPanel;

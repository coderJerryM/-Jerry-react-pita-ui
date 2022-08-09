import { Input, Icon } from '@/components'

const inputView = () => {
  return (
    <div>
      <h2>Input组件</h2>
      <Input placeholder="普通input"></Input>
      <h3> Input size示例</h3>
      <Input placeholder="小的input" size="small"></Input>
      <Input placeholder="正常的的input" size="default"></Input>
      <Input placeholder="大的input" size="large"></Input>
      <h3> Input Addon示例</h3>
      <Input addonBefore="http://" addonAfter="com" placeholder="请输入网站域名"></Input>
      <Input addonBefore="http://" placeholder="请输入网站域名"></Input>
      <Input addonAfter="com" placeholder="请输入网站域名"></Input>
      <h3>Input suffix prefix</h3>
      <Input
        suffix={<Icon type="bs" icon="BsFillArrowDownLeftSquareFill" color="red"></Icon>}
        placeholder="suffix"
      ></Input>
      <Input
        prefix={<Icon type="bs" icon="BsFillArrowDownLeftSquareFill" color="red"></Icon>}
        placeholder="prefix"
      ></Input>
      <Input
        allowClear
        prefix={<Icon type="bs" icon="BsFillArrowDownLeftSquareFill" color="red"></Icon>}
        suffix={<Icon type="bs" icon="BsFillArrowDownLeftSquareFill" color="red"></Icon>}
        placeholder="prefix"
        onClear={() => console.log('clear')}
        onChange={(e) => console.log(e.target.value)}
      ></Input>
      <Input disabled placeholder="disabled"></Input>
      <h3>allowClear</h3>
      <Input allowClear placeholder="allowClear"></Input>
    </div>
  )
}

export default inputView

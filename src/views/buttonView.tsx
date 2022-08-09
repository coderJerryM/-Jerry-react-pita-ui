import { Button } from '@/components'


const buttonView = () => {
  return (
    <div>
      {' '}
      <h2>Button组件</h2>
      <Button
        id="app1"
        disabled
        onClick={() => {
          console.log('button click')
        }}
      >
        普通的Button
      </Button>
      <Button size="small">Small Btn</Button>
      <Button size="large">Large Btn</Button>
      <Button type="danger">danger Btn</Button>
      <Button type="primary" loading>
        primary Btn
      </Button>
      <Button type="default">default Btn</Button>
      <Button type="default" loading>
        default loading Btn
      </Button>
      <Button href="http://www.baidu.com" target="_blank" type="link">
        链接的Button
      </Button>
      <Button href="http://www.baidu.com" target="_blank" type="link" disabled>
        disabled 链接的Button
      </Button>
    </div>
  )
}

export default buttonView

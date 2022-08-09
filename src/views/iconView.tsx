import { Icon } from '@/components'


const iconView = () => {
  return (
    <div>
      <h2>Icon组件</h2>
      <Icon type="bs" icon="BsFillArrowDownLeftSquareFill" color="red"></Icon>
      <Icon
        custom
        url="//at.alicdn.com/t/font_1791095_6urvhbxaj73.css"
        icon="qian"
        size="44px"
        style={{ color: 'red' }}
      ></Icon>
      <Icon type="hi" icon="" color="blue"></Icon>
    </div>
  )
}

export default iconView

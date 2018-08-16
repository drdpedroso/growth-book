import React from 'react'
import styled from 'styled-components'
import {Row} from '../../style'

const CheckItem = styled(Row)`
  align-items: center;
  flex: 0;
  padding-bottom: 0;
`

const mapItemsToCheckItems = (items = [], onChange = () => {}) => {
  return items.map(item => {
    return (
      <CheckItem key={item.id}>
        <input type="checkbox" checked={item.done} onChange={({target}) => onChange(item, target.checked)}/>
        <div> {item.title} </div>
      </CheckItem>
    )
  })
}

class CheckList extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      data: nextProps.data
    })
  }
  onChangeItem = (item, done) => {
    this.setState(prevState => {
      const data = prevState.data.filter(stateItem => stateItem .id !== item.id).concat({
        ...item,
        done,
      })

      return {data}
    }, () => this.props.onChangeItem(this.state.data))
  }
  render() {
    const {data} = this.state
    return (
      <div>
        {mapItemsToCheckItems(data, this.onChangeItem)}
      </div>
    )
  }
}

export default CheckList

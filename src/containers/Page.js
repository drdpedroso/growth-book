import React from 'react'
import {Row, Wrapper, ColumnLeft, Column, Title, RowRight} from '../style'
import CheckList from '../components/CheckListItem'

class AddItemInput extends React.PureComponent {

  state = {
    text: ''
  }

  render(){
    return (<div><button onClick={() => this.props.addItem(this.state.text, this.props.column)}>Add</button>
      <input onChange={({target}) => {this.setState({text: target.value})}} type="text" value={this.state.text}/>
        </div>)
  }
}

class Page extends React.PureComponent {
  constructor(){
    super()

    this.state = {
      scheduled: JSON.parse(localStorage.getItem('scheduled')) || [],
      todo: JSON.parse(localStorage.getItem('todo')) || [],
      goals: JSON.parse(localStorage.getItem('goals')) || []
    }
  }


  onChangeItem(data, list) {
    const dataToSave = JSON.stringify(data)
    localStorage.setItem(list, dataToSave)
  }

  addItem = (title, column) => {
    const columnData = JSON.parse(localStorage.getItem(column)) || []
    const id = columnData.length + 1
    columnData.push({id, title, done: false})
    localStorage.setItem(column, JSON.stringify(columnData))
    this.setState({
      [column]: columnData
    })
  }

  render() {
    const {scheduled, todo, goals} = this.state
    console.log(scheduled)
    return (
      <Wrapper>
        <Row>
          <ColumnLeft>
            <RowRight>
              <Column>
                <Title>Scheduled</Title>
                <Row style={{maxHeight: 40}}>
                  <AddItemInput addItem={this.addItem} column="scheduled" />
                </Row>
                <CheckList data={scheduled} onChangeItem={data => this.onChangeItem(data, 'scheduled')}/>
              </Column>
            </RowRight>
            <Row>
              <Column>
                <Title>To Do</Title>
                <Row style={{maxHeight: 40}}>
                  <AddItemInput addItem={this.addItem} column="todo" />
                </Row>
                <CheckList data={todo} onChangeItem={data => this.onChangeItem(data, 'todo')}/>
              </Column>
            </Row>
          </ColumnLeft>
          <Column>
            <RowRight>
              <Column>
                <Title>Goals</Title>
                <Row style={{maxHeight: 40}}>
                  <AddItemInput addItem={this.addItem} column="goals" />
                </Row>
                <CheckList data={goals} onChangeItem={data => this.onChangeItem(data, 'goals')}/>
              </Column>
            </RowRight>
            <Row>
              <Title>Motivation</Title>
            </Row>
          </Column>
        </Row>
      </Wrapper>
    )
  }
}

export default Page

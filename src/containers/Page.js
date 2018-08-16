import React from 'react'
import {Row, Wrapper, ColumnLeft, Column, Title, RowRight} from '../style'
import CheckList from '../components/CheckListItem'

const data = [
  {id: 1, title: 'Eat more', done: false},
  {id: 2, title: 'Eat mor2', done: true}
]

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

  addItem(title, column) {
    const columnData = JSON.parse(localStorage.getItem('scheduled')) || []
    debugger
    const id = columnData.length + 1
    columnData.push({id, title, done: false})
    localStorage.setItem(column, JSON.stringify(columnData))
    this.setState({
      scheduled: columnData
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
                  <button onClick={() => this.addItem('title', 'scheduled')}>Add</button><input type="text"/>
                </Row>
                <CheckList data={scheduled} onChangeItem={data => this.onChangeItem(data, 'scheduled')}/>
              </Column>
            </RowRight>
            <Row>
              <Title>To Do</Title>
              <CheckList data={todo} onChangeItem={data => this.onChangeItem(data, 'todo')}/>
            </Row>
          </ColumnLeft>
          <Column>
            <RowRight>
              <Title>Goals</Title>
              <CheckList data={goals} onChangeItem={data => this.onChangeItem(data, 'goals')}/>
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

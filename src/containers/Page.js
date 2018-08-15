import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
`

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ColumnLeft = styled(Column)`
  border-right: 2.5px solid #003cb3;
`

const RowRight = styled(Row)`
  border-bottom: 2.5px solid #003cb3;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`

const CheckItem = styled(Row)`
  align-items: center;
  flex: 0;
  padding-bottom: 0;
`

const CheckList = () => (
  <CheckItem>
    <input type="checkbox" />
    <div> Leke </div>
  </CheckItem>
)

class Page extends React.Component {
  render() {
    return (
      <Wrapper>
        <Row>
          <ColumnLeft>
            <RowRight>
              <Column>
                <Title>Leke</Title>

                <CheckList />
                <CheckList />
                <CheckList />
              </Column>
            </RowRight>
            <Row>
              <Title>Leke</Title>
            </Row>
          </ColumnLeft>
          <Column>
            <RowRight>
              <Title>Leke</Title>
            </RowRight>
            <Row>
              <Title>Leke</Title>
            </Row>
          </Column>
        </Row>
      </Wrapper>
    )
  }
}

export default Page

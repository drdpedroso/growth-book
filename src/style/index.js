import styled from 'styled-components'

export const Row = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
`

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ColumnLeft = styled(Column)`
  border-right: 2.5px solid #003cb3;
`

export const RowRight = styled(Row)`
  border-bottom: 2.5px solid #003cb3;
`

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`

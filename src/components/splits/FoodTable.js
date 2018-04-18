import React from 'react'
import { Table, Icon } from 'semantic-ui-react'
import FoodRow from './FoodRow'

export default class FoodTable extends React.Component {

  render() {
    return(
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='2'>Ian Ramos</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Item</Table.HeaderCell>
            <Table.HeaderCell>$</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <FoodRow />
          <Table.Row>
            <Table.Cell>Beta Team</Table.Cell>
            <Table.Cell>Project 1</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Project 2</Table.Cell>
            <Table.Cell>12</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Project 3</Table.Cell>
            <Table.Cell>21</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

// const mapStateToProps = state => ({
//
// })
//
// const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//
//   }, dispatch)
// )
//
// export default connect(mapStateToProps, mapDispatchToProps)(FoodTable)

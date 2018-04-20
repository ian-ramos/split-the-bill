import React from 'react'
import { Table } from 'semantic-ui-react'
import FoodRow from './FoodRow'

export default class FoodTable extends React.Component {

  render() {
    return(
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>Ian Ramos</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell className="item-cell">Item</Table.HeaderCell>
            <Table.HeaderCell className="cost-cell">$</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <FoodRow />
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

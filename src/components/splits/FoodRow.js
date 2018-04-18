import React from 'react'
import { Form, Table } from 'semantic-ui-react'

export default class FoodRow extends React.Component {

  state = {
    name: "",
    cost: ""
  }

  render() {
    return(
      <Table.Row>
          <Table.Cell>
            <Form>
              <Form.Input placeholder='Item' name="item" value={this.state.name}/>
            </Form>
          </Table.Cell>
          <Table.Cell>
            <Form>
              <Form.Input placeholder='$' name="cost" value={this.state.cost}/>
            </Form>
          </Table.Cell>
      </Table.Row>
    )
  }
}

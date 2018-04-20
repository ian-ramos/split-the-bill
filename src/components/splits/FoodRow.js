import React from 'react'
import { Form, Table, Icon } from 'semantic-ui-react'

export default class FoodRow extends React.Component {

  state = {
    item: "",
    cost: "",
    disabled: false
  }

  handleFormChange = (e) => {
    const name = e.target.name
    this.setState({[name]: e.target.value})
  }

  handleEditClick = () => this.setState({disabled: !this.state.disabled})

  render() {
    return(
      <Table.Row>
        <Table.Cell collapsing>
          <Icon name="edit" onClick={this.handleEditClick}/>
        </Table.Cell>
          <Table.Cell>
          <Form>
            <Form.Input placeholder='Item' name="item" disabled={this.state.disabled} value={this.state.item} onChange={this.handleFormChange}/>
          </Form>
          </Table.Cell>
          <Table.Cell>
            <Form>
              <Form.Input placeholder='$' name="cost" disabled={this.state.disabled} value={this.state.cost} onChange={this.handleFormChange}/>
            </Form>
          </Table.Cell>
      </Table.Row>
    )
  }
}

import React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPerson } from '../redux/actions'

class NameInputForm extends React.Component {

  state = {
    firstName: '',
    lastName: ''
  }

  handleFormChange = (e) => {
    const name = e.target.name
    this.setState({[name]: e.target.value})
  }

  handleAddPerson = (e) => {
    this.props.addPerson(this.state)
    this.setState({firstName: '', lastName: ''})
  }

  render() {
    return(
      <Form onSubmit={this.handleAddPerson}>
        <Form.Input placeholder='First name' name="firstName" value={this.state.firstName} onChange={this.handleFormChange}/>
        <Form.Input placeholder='Last name' name="lastName" value={this.state.lastName} onChange={this.handleFormChange}/>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  people: state.people
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addPerson
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(NameInputForm)

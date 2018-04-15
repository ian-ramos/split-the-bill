import React from 'react'
import { Grid } from 'semantic-ui-react'
import NameInputForm from './NameInputForm'

export default class MainContainer extends React.Component {

  render() {
    return (
      <Grid>
        <Grid.Row columns={2} centered>
          <div className="name-input-form">
            <NameInputForm />
          </div>
        </Grid.Row>
      </Grid>
    )
  }
}

import React from 'react'
import { Grid } from 'semantic-ui-react'
import NameInputForm from './NameInputForm'
import FoodTable from './splits/FoodTable'

export default class MainContainer extends React.Component {

  render() {
    return (
      <Grid>
        <Grid.Row columns={2} centered>
          <div className="name-input-form segment">
            <NameInputForm />
          </div>
        </Grid.Row>
        <Grid.Row columns={2} centered>
          <Grid.Column>
            <div className="food-table segment">
              <FoodTable />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

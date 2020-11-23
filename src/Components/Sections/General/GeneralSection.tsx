import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { SegmentCustom } from '../../Segments/SegmentCustom'
import Number from '../../Common/Numbers/Number'

export const GeneralSection = () => {
    return (
      <>
        <Header as={'h1'}>
          General Stats
        </Header>
        <SegmentCustom>
          <Grid
            columns={3}
            divided={true}
            textAlign={'center'}
            stackable={true}
          >
            <Grid.Row>
              <Grid.Column>
                <Header style={{ fontSize: 32, margin: 0 }}><Number value={799} /></Header>
                <Header style={{ fontSize: 28, margin: 0 }}>Games Played</Header>
              </Grid.Column>
              <Grid.Column>
                <Header style={{ fontSize: 32, margin: 0 }}><Number value={243} /></Header>
                <Header style={{ fontSize: 28, margin: 0 }}>Hours Played</Header>
              </Grid.Column>
              <Grid.Column>
                <Header style={{ fontSize: 32, margin: 0 }}><Number value={10641512} /></Header>
                <Header style={{ fontSize: 28, margin: 0 }}>Actions Executed</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </SegmentCustom>
      </>
    )
}

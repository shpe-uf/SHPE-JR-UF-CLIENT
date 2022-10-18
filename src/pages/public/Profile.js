import React, { useContext, useState } from "react";
import gql from "graphql-tag";
import {
  Header,
  Container,
  Grid,
  Segment,
  Loader,
  Button,
  Modal,
  Form,
  Image,
  Label,
} from "semantic-ui-react";

import UserProfile from "../../components/UserProfile";

import placeholder from "../../assets/images/placeholder.png";

function ProfilePage(props) {

    return (
        <div className="body">
          <Header title="My Profile" />
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Button
                    content="Edit Profile"
                    icon="text cursor"
                    labelPosition="left"
                    floated="right"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Segment>
              <UserProfile>
                
              </UserProfile>
            </Segment>
          </Container>
        </div>
      );
}

export default ProfilePage;

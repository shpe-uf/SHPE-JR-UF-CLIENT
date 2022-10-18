import React from "react";
import { Grid, Image, Table } from "semantic-ui-react";
import moment from "moment";

import placeholder from "../assets/images/princesa-dormindo.jpeg";

function UserProfile() {
  return (
    <Grid columns={2} doubling>
      <Grid.Row>
        <Grid.Column>
            <Image
              rounded
              size={"huge"}
              src={placeholder}
              className="image-profile"
            />
        </Grid.Column>
        <Grid.Column>
          <div className="table-responsive">
            <Table striped selectable unstackable>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <b>Name:</b>
                  </Table.Cell>
                  <Table.Cell>
                    Princesa Filizola
                  </Table.Cell>
                </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <b>Username:</b>
                    </Table.Cell>
                    <Table.Cell>
                      cutest-most-amazing-bestest-dog
                    </Table.Cell>
                  </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <b>Email:</b>
                  </Table.Cell>
                  <Table.Cell>
                    princesa@shpe-uf.com
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <b>Major:</b>
                  </Table.Cell>
                  <Table.Cell>
                    Anthropology
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <b>Year:</b>
                  </Table.Cell>
                  <Table.Cell>
                    8th Year
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <b>Graduating:</b>
                  </Table.Cell>
                  <Table.Cell>
                    No
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <b>Country:</b>
                  </Table.Cell>
                  <Table.Cell>
                    Brazil
                  </Table.Cell>
                </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <b>Ethnicity:</b>
                    </Table.Cell>
                    <Table.Cell>
                      Mutt
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <b>Gender:</b>
                    </Table.Cell>
                    <Table.Cell>
                      Coder
                    </Table.Cell>
                  </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <b>Member Since:</b>
                  </Table.Cell>
                  <Table.Cell>
                      <p>
                        08/20/2022
                      </p>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default UserProfile;

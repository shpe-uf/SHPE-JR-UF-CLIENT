import React from "react";
import { gql, useQuery } from "@apollo/client";

function Home() {
  const { loading, data } = useQuery(FETCH_USERS_QUERY);

  if (data) {
    console.log(data.getUsers);
  }

  return (
    <div>
      <h1>SHPE Junior @ UF</h1>
    </div>
  );
}

const FETCH_USERS_QUERY = gql`
  {
    getUsers {
      id
      username
    }
  }
`;

export default Home;

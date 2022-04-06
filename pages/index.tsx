import React from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';

interface ExampleQuery {
  code: string;
  name: string;
}

interface ExampleQueryDatas {
  countries: ExampleQuery[];
}

const exampleQuery = gql`
  query ExampleQuery {
    countries {
      code
      name
    }
  }
`;

const Test = styled.div``;

const Home = () => {
  const { loading, error, data } = useQuery<ExampleQueryDatas>(exampleQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <header>ApolloTest</header>
      <div>
        {data &&
          data.countries.map(({ code, name }) => {
            return (
              <div>
                <div>country-code: {code}</div>
                <div>country-name: {name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;

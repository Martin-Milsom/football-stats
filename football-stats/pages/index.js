import { Jumbotron, Table } from "react-bootstrap";

function Home({ standings }) {
  return (
    <div>
      <Jumbotron>
        <h1>Next.js football things.</h1>
        <p>
          This is going to be really useful.
        </p>
      </Jumbotron>
      <h2>{standings.competition.area.name}</h2>
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>Gd</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.positions.map(position => {
            return (<tr>
              <td>{position.position}</td>
              <td>{position.team}</td>
              <td>{position.goalDifference}</td>
              <td>{position.points}</td>
            </tr>)
          })}
        </tbody>
      </Table> */}
    </div>
  );
}


export default Home;

export async function getStaticProps() {
  let response = await fetch(
    'https://api.football-data.org/v2/competitions/BSA/standings',
    { headers: { 'X-Auth-Token': 'b983fc912c504740943950c82b43d99e' } }); 
  let standings = await response.json();

  return {
    props: {
      standings: standings
    },
  };
}

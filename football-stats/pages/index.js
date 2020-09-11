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
      <h2>{standings.leagueName}</h2>
      <Table striped bordered hover>
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
      </Table>
    </div>
  );
}


export default Home;

export async function getStaticProps() {
  return {
    props: {
      standings: {
        leagueName: "EPL Standing - 19/20 season",
        positions: [{
          position: 1,
          team: "Team 111",
          goalDifference: 77,
          points: 60
        }]
      }
    },
  };
}

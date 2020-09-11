import { Jumbotron, Table } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Jumbotron>
        <h1>Next.js football things.</h1>
        <p>
          This is going to be really useful.
        </p>
      </Jumbotron>
      <h2>EPL Standing - 19/20 season</h2>
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
          <tr>
            <td>1</td>
            <td>Team 1</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Team 2</td>
            <td>8</td>
            <td>9</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

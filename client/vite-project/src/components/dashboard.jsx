import { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import axios from "axios";
import LoadingButton from "./loadingButton";
function Dashboard() {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/api/getAll").then((result) => {
      console.log(result.data);
      setContactList(result.data);
    });
  });
  return (
    <Container>
      <Button variant="primary" href="/add">Add</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Nomor</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact, i) => {
            const { name, nomer } = contact;
            return (
              <tr key={i}>
                <td>{name}</td>
                <td>{nomer}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Dashboard;

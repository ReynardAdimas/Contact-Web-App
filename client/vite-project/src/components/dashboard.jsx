import { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import axios from "axios"; 
import Update from './updateContact.jsx'
function Dashboard() {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/api/getAll").then((result) => {
      console.log(result.data);
      setContactList(result.data);
    }); 
  }); 

  const deleteContact = (id) => {
      axios.delete(`http://localhost:2000/api/delete/${id}`) 
      if(!alert('Deleted')){window.location.reload()}
    } 

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
            const { _id, name, nomer } = contact;
            return (
              <tr key={i}> 
                <td>{name}</td>
                <td>{nomer}</td>
                <td>{
                  <Button variant='danger' onClick={() => deleteContact(_id)}>Delete</Button>
                }</td> 
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Dashboard;

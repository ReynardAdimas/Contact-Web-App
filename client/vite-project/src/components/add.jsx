import {Button, Form, FormGroup, Container} from 'react-bootstrap'
import {useState} from 'react' 
import axios from 'axios'

function Add() { 
    const [nama, setNama] = useState('')
    const [nomor, setNomor] = useState('') 

    const handleNama = (inputNama) => { 
        //console.log(inputNama)
        setNama(inputNama) 
    }

    const handleNomor = (inputNomor) => {
        //console.log(inputNomor)
        setNomor(inputNomor)
    } 

    const userRegister = () => {
        // axios.post('http://localhost:2000/api/post', {
        //     name:nama, 
        //     nomor:nomor
        // }).then((result) => {
        //     console.log(result.data)
        // })
        const requestingData = {
            name:nama, 
            nomer:nomor
        } 
        axios({
            method:"POST",
            url:"http://localhost:2000/api/post", 
            data:requestingData
        }).then((result) => {
            console.log(result.data) 
            window.location.replace('/dashboard')
        }) 
        if(!alert('added succesfully')){window.location.reload()}
    }    

    return(
        <Container>
            <Form className='w-50 mx-auto'>
                <FormGroup className='m-3'>
                    <Form.Label className="m-3">Nama</Form.Label> 
                    <Form.Control 
                    type='text'
                    placeholder='Masukkan nama'
                    required 
                    onChange={(event) => handleNama(event.target.value)} />  
                </FormGroup>
                <FormGroup className='mb-3'>
                    <Form.Label>Nomor</Form.Label> 
                    <Form.Control type='text' placeholder='Masukkan Nomor' required onChange={(event) => handleNomor(event.target.value)} />
                </FormGroup> 
                <Button variant='primary' onClick={() => userRegister()}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
} 
export default Add
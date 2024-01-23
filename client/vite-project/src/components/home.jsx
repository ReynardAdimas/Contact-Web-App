import {Button} from 'react-bootstrap'

function Home() {
    return(
        <>
            <h1>Ini home page</h1>
            <h2>Ketuk untuk memulai</h2> 
            <Button href='/add' variant='primary'>Add Contact</Button>
        </>
    )
} 
export default Home
import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { loginUsers } from "../../store/action-creators/user";
import { useAppDispatch, useAppSelector } from "../../store/hooks";



const Authorization = ()=>{
    const dispatch = useAppDispatch()
    const {user,authorized,error} = useAppSelector((state) => state.users)
    console.log({user,error})

    const [viewPassword,setViewPassword] = useState(false)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    function sendForm(){
        dispatch(loginUsers(email,password))
    }
    
    return(
        <Container fluid='md' style={{padding:'0',height:'87.2vh',position:'relative'}}>
            <div style={{width:'80%',height:'max-content',position:'absolute',left:'0',right:'0',top:'0',bottom:'0',margin:'auto'}}>
                {authorized && <Navigate to={`/`} />}
                <h1> {error ? error :  "Authorization"}</h1>
                <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>email</Form.Label>
                        <Form.Control onChange={e=>setEmail(e.target.value)} value={email} type="text" placeholder="email" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={e=>setPassword(e.target.value)} value={password} type={viewPassword ? "text" : "password" } placeholder="Password" />
                </Form.Group>

   
                
                <div className="d-flex justify-content-between">
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" onClick={()=>setViewPassword(!viewPassword)} label="Show password" />
                        </Form.Group>

                        <Link style={{color:'blue'}} to='/register'>I don't have an account. Register</Link>
                </div>

                <Button  variant="primary" type="submit" onClick={()=>{sendForm()}}>
                    Submit
                </Button>

                
            </div>

        </Container>
    )
}

export default Authorization;
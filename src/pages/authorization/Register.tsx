import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { registrationUsers } from "../../store/action-creators/user";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addDangerMessage } from "../../store/reducer/messageReducer";



const Register = ()=>{
    const dispatch = useAppDispatch()
    const {user,authorized,error} = useAppSelector((state) => state.users)


    const [viewPassword,setViewPassword] = useState(false)

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repeatPassword,setRepeatPassword] = useState('')
    function sendForm(){
        if(password === repeatPassword){
            dispatch(registrationUsers(email,password))
        }else{
            dispatch(addDangerMessage('Passwords do not match'))
        }
        
    }
    return(
            <Container fluid='md' style={{padding:'0',height:'87.2vh',position:'relative'}}>
                <div style={{width:'80%',height:'max-content',position:'absolute',left:'0',right:'0',top:'0',bottom:'0',margin:'auto'}}>

                        {authorized && <Navigate to={`/`} />}
                        <h1> {error ? error :  "Registration"}</h1>
                        
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                                <Form.Label>email</Form.Label>
                                <Form.Control onChange={e=>setEmail(e.target.value)} value={email} type="text" placeholder="email" />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={e=>setPassword(e.target.value)} value={password} type={viewPassword ? "text" : "password" } placeholder="Password" />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId="Repeat password">
                                <Form.Label>Repeat password</Form.Label>
                                <Form.Control onChange={e=>setRepeatPassword(e.target.value)} value={repeatPassword} type="password" placeholder="Repeat password" />
                        </Form.Group>

                       


                        <div className="d-flex justify-content-between">
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" onClick={()=>setViewPassword(!viewPassword)} label="Show password" />
                            </Form.Group>
                            <Link style={{color:'blue'}} to='/entrance'>I already have an account. To come in</Link>
                        </div>
                        <Button  variant="primary" type="submit" onClick={()=>{sendForm()}}>
                            Submit
                        </Button>

                    
                </div>

            </Container>

    )
}

export default Register;
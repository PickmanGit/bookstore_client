import { Button, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar } from "react-bootstrap"


const FilterInput = ({valueInput,setValueInput,onClickBtn,dropdown,orderItem,orderClick}:any)=>{
    return(
        <Navbar  bg="dark" variant="dark" style={{opacity:'0.98',zIndex:'10'}}>
                <Nav  className="mx-4"  style={{width:'80%'}}>
                   
                        <FormControl
                            type="search"
                            placeholder="Search"
                            // className="me-0 "
                            value={valueInput}
                            onChange={(e)=>setValueInput(e.target.value)}
                            aria-label="Search"
                            style={{borderRadius:"20px 0 0 20px"}}
                        />
                        <Button variant="btn btn-secondary btn-lg" onClick={()=>onClickBtn()} style={{borderRadius:"0 20px 20px 0"}} className="border-0">Search</Button>
                   
                </Nav> 

                <Nav className='justify-content-end flex-grow-1 mx-4'>
                    <DropdownButton
                        id="dropdown-button-dark-example2"
                        variant="secondary"
                        menuVariant="dark"
                        title="Sort by"
                        className="mt-0">

                            {dropdown.map((item:any,id:number)=>
                                <Dropdown.Item key={id} onClick={()=>{orderClick(item.title)}} active={orderItem === item.title ? true : false} >{item.title}</Dropdown.Item>
                            )}
                        

                    </DropdownButton>
                </Nav>
        </Navbar>
    )
}

export default FilterInput;
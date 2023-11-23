import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Basket, Person } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom";
import { Task } from "../../types/Task";
import { TaskService } from "../../services/TaskService";
import { toast } from "react-toastify";
import ModalAgregarTarea from "../ModalAgregarTarea/ModalAgregarTarea";


const NavBar = () => {

  const navigate = useNavigate();
  const[showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false)
  };

  const createTask = async (newTask: Task) => {
    try {
      const result = await TaskService.createTask(newTask);
      console.log('nueva tarea agregada:', result.id);
      navigate(`/detalle/${result.id}`);

      toast.success('Tarea creada correctamente', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      }); 
    } catch (error) {
      toast.error('Error al crear tarea', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.error('Error al crear tarea:', error)
    }
    
  };

  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Desarrollo en Argentina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate('/')}>Home</Nav.Link>
           
            <NavDropdown title="Tareas" id="basic-nav-dropdown">
              <NavDropdown.Item href="PORHACER">Por Hacer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">En Produccion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Por Testear</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Completada</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link onClick={handleShowModal} href="#home">Agregar Tarea</Nav.Link>
          </Nav>
        <Nav className="d-none d-md-flex ms-auto">
            <Nav.Link href="#carrito">
                <Basket/>
            </Nav.Link>
            <Nav.Link href="#usuario">
                <Person/>
            </Nav.Link>



        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <ModalAgregarTarea showModal={showModal} handleClose={handleCloseModal} createTask={createTask}/>
    </>
  )
}

export default NavBar
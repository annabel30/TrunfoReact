import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navvv'>
      <Nav fill variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Início</Nav.Link>
        </Nav.Item>
        <NavDropdown title="Mostrar" id="nav-dropdown">
          <NavDropdown.Item eventKey="link-1" href="/mostrarCarta">Carta específica</NavDropdown.Item>
          <NavDropdown.Item eventKey="link-2" href="/mostrarCartas">Todas as cartas</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="link-3" href="/mostrarJogador">Perfil</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Ações" id="nav-dropdown">
          <NavDropdown.Item eventKey="link-4" href="/cadastroCarta">Cadastrar carta</NavDropdown.Item>
          <NavDropdown.Item eventKey="link-5" href="/editarCarta">Editar carta</NavDropdown.Item>
          <NavDropdown.Item eventKey="link-6" href="/removerCarta">Remover carta</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="link-7" href="/jogo" disabled>Jogo</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;
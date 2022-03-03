import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';

export default function AppLayout() {

  return (
    <>
      <Navbar />
      <Container className="mt-3" fluid>
        <Outlet />
      </Container>
    </>
  )

}
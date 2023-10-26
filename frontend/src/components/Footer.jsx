import { Container, Row, Col } from 'react-bootstrap'
import '../Footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row>
                <Col className='text-center py-3'>Copyright &copy; 2023 Tadeo Miranda</Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer

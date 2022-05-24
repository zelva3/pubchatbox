

import { Container } from 'semantic-ui-react';
import logo from '../assets/github-logo.png';
import '../assets/style.css';

const Layout = (props) => {

    return (
        <Container style={{ marginTop: '20px' }}>
            {props.children}
            <div className='bottom-credit'>
                <a href='https://github.com/zelva3/pubchatbox' target="_blank">
                    <img src={logo} alt="Zelva" />
                    <h5>Zelva</h5>
                </a>
            </div>
        </Container>
    )
}

export default Layout;
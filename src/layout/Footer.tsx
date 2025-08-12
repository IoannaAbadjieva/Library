import { Container, Menu, Icon } from "semantic-ui-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();


    return (
        <Menu fixed="bottom" inverted >
            <Container textAlign="center" style={{ minWidth: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Menu.Item>
                    <Menu.Item onClick={() => navigate(-1)} >
                        <Icon name="arrow left" /> Back
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/" >
                        <Icon name="home" /> Home
                    </Menu.Item>
                </Menu.Item>
                <Menu.Item>
                    <Icon name="copyright" /> 2025 Library
                </Menu.Item>
                <Menu.Item>
                    <Menu.Item as="a" href="#">
                        <Icon name="facebook" />
                    </Menu.Item>
                    <Menu.Item as="a" href="#">
                        <Icon name="twitter" />
                    </Menu.Item>
                    <Menu.Item as="a" href="#">
                        <Icon name="instagram" />
                    </Menu.Item>
                </Menu.Item>
            </Container>
        </Menu>
    );
}

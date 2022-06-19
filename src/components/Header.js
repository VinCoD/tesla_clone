import styled from "styled-components"
function Header() {
    return(
        <Container>
            <a>
                <img src="/images/logo.svg"/>
            </a>
            <Menu>


            </Menu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    

`
const Menu = styled.div`

`
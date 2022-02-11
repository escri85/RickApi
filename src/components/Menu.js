import styled from 'styled-components'


const Menu = styled.nav`
width: 100%;
text-align: center;
background: #092c4c;
display: flex;
flex-direction:row;
justify-content: space-around;
border-radius: 3px;

a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
}

a:hover {
    background: #1d85e8;
    text-decoration: none;
}
a:focus{
    background: #1d85e8;
    text-decoration: none;
}
`
export default Menu
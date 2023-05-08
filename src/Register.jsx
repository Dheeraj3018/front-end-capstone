
import styled from "styled-components"

const Container=styled.div`
width:100vw;
height:100vh;
background:linear-gradient( 
    rgba(225,255,225,0.5),
    rgba(225,255,225,0.5)
),
url(" https://learn.canva.com/wp-content/uploads/2020/02/removing-background-images_Unsplash.jpeg"),center;
display:flex;
align-items:center;
justify-content:center;`;

const Wrapper=styled.div`
width:40%;
padding:20px;
background-color:white;`;

const Form=styled.form`
display:flex;
flex-wrap:wrap;

`;

const Title=styled.h1`
font-size=24px;
font-weight:300px;
`;
const Input=styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;
const Agreement=styled.span`
font-size:12px;
margin:20px 0px;`;

const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`;



export const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title> Create an account</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account i accept the  <b>Privacy policy </b>
                </Agreement>
                <Button>create</Button>
                
            </Form>
        </Wrapper>

    </Container>
  )
}

export default Register;

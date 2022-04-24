import styled from "styled-components"
import { ThemeContext } from "../contexts/ThemeContext" 
import { useContext } from "react"; 

const Form = () => {
 
  var {theme}=useContext(ThemeContext)
  
   const Form_style =styled.section`
  
   & form{
   border:1px solid rgb(24, 21, 21);
   width: 50%;
   margin: 2%;
   margin-left: 25%;
   padding: .3%;
   border-radius:px;
   background-color: ${theme==="dark" ? "rgb(18, 4, 63)" : "rgb(212, 210, 196)"};
   }

   & input{
    margin :2%;
    width: 50%;
    margin-left: 5%;
    padding: 2%;
    background-color: rgb(211, 225, 220);
    border: .1px solid grey;
    border-radius:5px;}
  
   & h1{
    border:.1px solid rgb(71, 69, 69);
    width: 50%;
    text-align: center;
   margin: 2%;
   margin-left: 25%;
   padding: .3%;
   background-color: ${theme==="light" ? "rgb(212, 210, 196)" : "rgb(18, 4, 63)"};
   color:${theme==="dark" ? "rgb(212, 210, 196)" : "black"};
}

& .submit{
  background-color: ${theme==="dark" ? "rgb(212, 210, 196)" : "grey"};
  color :${theme==="light" ? "white" : "rgb(18, 4, 63)"};
  border: 0px;
  font-weight:600;
  width: 30%;
  cursor: pointer;
  border-radius: 5px;
  padding: 1%;}
 

  & .submit:hover{
    box-shadow: rgba(107, 244, 107, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border: 2px solid yellowgreen;}
  `
 
 
  return (
    <>
    <Form_style>
      <h1>Fill Your Details</h1>
      <hr></hr>
      <form>
        <input name="name" type="text" placeholder="Enter Name"></input>
        <br></br>

        <input name="age" type="number" placeholder="Enter Age"></input>
        <br></br>

        <input name="address" type="text" placeholder="Enter Address"></input>
        <br></br>

       
        <input type="submit" value="Submit" className="submit"></input>
      </form>
      </Form_style>
    </>
  );
};

export { Form };

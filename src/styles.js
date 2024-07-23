import styled from "styled-components"

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: white;
    padding: 30px 20px;
    border-radius: 5px;

    ul{
        padding: 0;
        margin-top: 60px;
    }
`

export const Input = styled.input`
    border: 2px solid #D1D3D466;
    border-radius: 5px;
    height: 40px;
    margin-top: 30px;
    margin-right: 40px;
    width: 342px;
`

export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    color: #FFFFFF;
    border: none;
    line-height: 2.5px;
    font-size:18px;
    font-weight: 900;
    height: 40px;
    width: 130px;
`

export const ListItem = styled.div`
    box-shadow: 1px 4px 10px 0px #00000033;
    border-radius: 5px;
    height: 60px;
    background: #E4E4E4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 10px;
    width: 500px;


    li{
        list-style: none;
    }

`
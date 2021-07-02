import styled from 'styled-components'
export const Container = styled.div` 
    display: flex;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    flex-direction: column;
    font-size: 16px;

    form{
        display:flex;
        flex-direction: column;
        

        input {
            margin-bottom: 16px;
            padding: 8px;
        }

        button {
            padding: 8px;
        }
    }

    ul li {
        background: #fff;
        margin-top: 30px;
        list-style: none;
        display:flex;
        flex-direction: column;

      }

      ul li {
        text-decoration: none;
        align-items: center;
      }


      button {
        margin-top: 20px;
        padding: 5px 15px;
        border-radius: 5px;
        border: 0;
        background: #black;
        color: black;
        font-weight: bold;
      }
`
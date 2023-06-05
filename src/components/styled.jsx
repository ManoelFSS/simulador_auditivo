import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 50vh;
    min-width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: #b90e0e;
    position: relative;

  .toggleArea{
    width: 600px;
   }

`;

export const Div = styled.section`
    display: flex;
    gap: 100px;
    padding: 50px 50px;
    background-color: #742929;
    border-radius: 180px;
`;

export const ContainerRight = styled.section`

  img{
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
    
`;

export const ContainerLeft = styled.section`

      display: flex;
      justify-content: center;
      align-items: center;

      div{
        display: flex;
        flex-direction: column;
        gap: 15px;

        h4{
            height: 25px;
            border-bottom: 3px solid #fff;
            width:116px;
            font-size: 18px;
            font-weight: bold;
            text-transform: uppercase;
            color:#fff ;
        }

        ol{
            padding: 0px 0px 0px 15px;
            color: #a1a1a1;
        }

        audio{
          width: 330px;
        }
        .gif{
          height: 50px;
          width: 330px;
          padding: 10px;
  
        }

        p{
          color: #fff;
        }

      }

  
`;

export const Button = styled.a`
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color:#BF6565;
    color: #fff;
    font-weight: 400;
    text-transform: uppercase;

    &:hover{
        background-color:#C74F4F;
    }
`;

export const AreaBtns = styled.section`
    display: flex;
    gap: 30px;
`;
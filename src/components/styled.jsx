import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    background-color:#C74F4F;
    padding: 20px;
    transition: all 0.4s;

    div{
      padding: 10px;
    }

    h3{
      padding: 0px 0px 10px 0px;
      color: #fff;
      border-bottom: solid 3px #fff;
    }

`;

export const Div = styled.section`
    display:flex;
    background-color: #000000;
    border-radius: 180px;


    @media(max-width:740px){
      display: block;
      border-radius: 50px;
      padding: 10px;
    }
`;

export const ContainerRight = styled.section`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media(max-width:740px){
    padding: 10px;

  }

  img{
    max-width: 250px;
    min-width: 200px;
    border-radius: 50%;
    @media(max-width:740px){
      max-width: 150px;
    }
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
        align-items: center;
        padding: 20px;
   
        @media(max-width:740px){
          padding: 10px;
          gap: 10px;
        }

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

        li{
          padding: 5px;
        }

        audio{
          width: 330px;
          @media(max-width:740px){
            max-width: 230px;
          }
        }

        p{
          color: #fff;
          border-bottom:solid 3px #fff;
          padding: 0px 0px 10px 0px;
          cursor: pointer;
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
    cursor: pointer;

    @media(max-width:740px){
      max-width: 110px;
      font-size: 12px;
    }

    &:hover{
        background-color:#C74F4F;
    }
`;

export const AreaBtns = styled.section`
    display: flex;
    gap: 30px;
    @media(max-width:740px){
      gap: 10px;
    }
`;
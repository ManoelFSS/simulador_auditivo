import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    height: 100vh;
    flex-direction: column;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    background-color:#C74F4F;
    padding: 20px;
    transition: all 0.4s;
    user-select: none;
    outline: none;

    div{
      padding: 10px;
    }

    h3{
      height: 28px;
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
      padding: 0px;
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
      transform: scale(0.7);
    }
 
  }

  .animation{
    animation: anima 1s alternate-reverse infinite;
  }

  @keyframes anima {
    0%{
      box-shadow: 0px 0px 10px #ff00002f;
    }
    25%{
      box-shadow: 0px 0px 20px #002383ea;
      transform: scale(0.8);;
    }
    50%{
      box-shadow: 0px 0px 30px #c7e907dd;
    }
    75%{
      box-shadow: 0px 0px 40px #a5198ed8;
    }
    100%{
      box-shadow: 0px 0px 50px #ff0000c5;
      transform: scale(0.7);
    }
  }

    
`;

export const ContainerLeft = styled.section`

      display: flex;
      justify-content: center;
      align-items: center;
    
      div {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        padding: 20px;

        section{
          width: 100%;
          @media(max-width:740px){
            display: flex;
            justify-content: center;
          }
        }
   
        @media(max-width:740px){
          padding: 10px;
          gap: 10px;
        }

        h4{
            height: 28px;
            border-bottom: 3px solid #fff;
            width:116px;
            font-size: 18px;
            font-weight: bold;
            text-transform: uppercase;
            color:#fff ;
           
        }

        ol{
           
            color: #a1a1a1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 15px;
            @media(max-width:740px){
              width:100%;
              margin-left: 18px;
             
            }
        }

        li{
          padding: 5px;
        }

        audio{
          width: 330px;
          @media(max-width:740px){
            max-width: 250px;
          }
        }

        span{
          color: #fff;
          font-weight: 800;

        }

        p{
          color: #fff !important;
          border-bottom:solid 3px #fff;
          height: 25px;
          cursor: pointer;;
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
      gap: 30px;
    }
`;
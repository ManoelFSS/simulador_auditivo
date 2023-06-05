import React, {useState, useEffect} from "react";
import * as S from './styled'
import Img from '../assets/ouvido01.png';
import Gif from '../assets/hondas.gif';
import som01 from '../sonds/som01.mp3'
import som02 from '../sonds/som02.mp3'
import som03 from '../sonds/som03.mp3'
import som04 from '../sonds/som04.mp3'
import som05 from '../sonds/som05.mp3'
import som06 from '../sonds/som06.mp3'
import som07 from '../sonds/som07.mp3'

    export default function Simulador() {
        const [hendelTeste, setHendelTeste] = useState(false);
        const [audioCount, setAudioCount] = useState(0);
        const [audio, setAudio] = useState(null);
        const [display, setDisplay] = useState();
       

      
     
        const hendelClickAnterior = () => {
            if(audioCount > 0){
                setAudioCount(audioCount - 1)
                setDisplay('')
            }     
           
        };
      
        const hendelClickProximo = () => {
            if(audioCount < 6){
                setAudioCount(audioCount + 1)
                setDisplay('')
            }       
           
        };
  
        useEffect(() => {
          switch (audioCount) {
            case 0:
              setAudio(som01);
              break;
            case 1:
              setAudio(som02);
              break;
            case 2:
              setAudio(som03);
              break;
            case 3:
              setAudio(som04);
              break;
            case 4:
              setAudio(som05);
              break;
            case 5:
              setAudio(som06);
              break;
            case 6:
              setAudio(som07);
              break;
            default:
              break;
          }
        },[audioCount]);
        console.log(audio)

        const hendelTexteClick = () => {
            setHendelTeste(!hendelTeste);
            setDisplay('')
    
          };

          const handlePlay = () => {
            // Lógica da função a ser executada quando o áudio é reproduzido
            console.log("O áudio foi reproduzido!");
            setDisplay(Gif)
          
          };

          const handleAudioEnded = () => {
            // Lógica da função a ser executada quando o áudio terminar de tocar
            console.log("O áudio terminou de tocar!");
            setDisplay('')
          };

          const handlePause = () => {
            // Lógica da função a ser executada quando o áudio é pausado
            console.log("O áudio foi pausado!");
              setDisplay('')
          };
        
        return (
          <S.Container>
            <div>
              <h3>Simulador Auditivo</h3>
            </div>
            <section >
              <S.Div  style={{ background:`#000 url(${display}) no-repeat center / cover`}}>
                <S.ContainerRight>
                  <img src={Img} alt="" />
                </S.ContainerRight>
                <S.ContainerLeft>
                  <div >
                    {hendelTeste === true && 
                        <>
                          <div className="toggleArea">
                              <audio 
                                controls src={audio} 
                                onPlay={handlePlay} 
                                onEnded={handleAudioEnded} 
                                onPause={handlePause}
                              /> <span>{`${audioCount + 1} | 7 `}</span>
                              <S.AreaBtns>
                                { audioCount > 0 &&
                                  <S.Button onClick={hendelClickAnterior}>
                                    Anterior
                                  </S.Button>
                                }
                                <S.Button onClick={hendelClickProximo}>
                                  Próximo
                                </S.Button>
                              </S.AreaBtns>
                          </div>
                          <p onClick={hendelTexteClick}>Voltar</p>
                       </>
                    }
      
                    {hendelTeste === false && 
                      <div className="toggleArea">
                        <section>
                            <h4>Instruções</h4>
                        </section>
                        <ol>
                          <li>Encontre um lugar silencioso.</li>
                          <li>Use fones de ouvido e ajuste o volume mínimo.</li>
                          <li>Siga as instruções do teste.</li>
                          {/* <li>Ecolha entre a Orelha esquerda/direita e faça o teste sonoro em ambas.</li> */}
                          <li>Repita o teste, se necessário.</li>
                        </ol>
                        <section>
                          <S.Button onClick={hendelTexteClick}>
                            Iniciar Teste
                          </S.Button>
                        </section>
                      </div>
                    }
                  </div>
                </S.ContainerLeft>
              </S.Div>
            </section>
          </S.Container>
        )
      }
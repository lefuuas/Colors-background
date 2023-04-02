import Button from '../../components/Button'
import Centerbar from '../../components/Centerbar'
import Sidebar from '../../components/Sidebar'
import "./index.css"

export const Home = () => {


  class Altercolor{
    //pega a referencia do body e color-solid
    constructor(){
      this.body = document.body
      this.solid_color = document.querySelector('.color-solid')
    }

    //Cria um hexadecimal aleatorio
    RandomHExa(){
      //variavel de algarismo disponiveis
      var letters = '0123456789ABCDEF';
      //variavel de armazenamento da cor hexadecimal
      var color = '#';
      for (var i = 0; i < 6; i++) {
        //escolhe uma posiçao aleatoria de latters e adiciona
        // na varivel color
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color

    }
    //Modifica  a cor do body
    ColorModify(){
      //modificando o style background para o hexadecimal
      // gerado pela função
      this.body.style.backgroundColor = this.RandomHExa()

      //atribuindo a mesma cor do meu background no meu 
      //solid-color para que fiquem iguais
      this.solid_color.style.backgroundColor = this.body.style.backgroundColor

    }
  }

  //intaciando a classe altercolorw
  const altercolor = new Altercolor()
  
  //uma funçao para ser chamada pelo Onclick do Button
  //passando somente a o metodo da classe da erro
  const ButtonAlte =()=>{
    //invocando o metodo ColorModify da Classe
    altercolor.ColorModify()
  }

  //Use effect para sempre que a pagina for carregadada
  //colocar uma nova cor na pagina
  // useEffect(()=>{altercolor.ColorModify()})



  return (
    //Componentes Html
    <>
    <Sidebar/>
    <Centerbar/>
    <Button colorfunction={ButtonAlte}/>
    
    
    </>

  )
}

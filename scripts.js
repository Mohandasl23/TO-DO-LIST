/*Lista de tarefas
[x] Saber quando o botão foi clicado
[X] Precisa pegar o texto dentro input
[x] preciso colocar esse texto na tela
[x] Deletar a tarefa da tela (Quando eu clicar no x)
*/


function adicionarTarefa(){
  let valorDoInput = document.querySelector("input").value


  let li = document.createElement("li")
  li.innerHTML = valorDoInput + '<span onclick="deletarTarefa(this)">❌</span>'

  document.querySelector("ul").appendChild(li)

  document.querySelector("input").value = ""

}

function deletarTarefa(li){
    li.parentElement.remove()
}






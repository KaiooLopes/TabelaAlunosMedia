const alunosService = new AlunosService()

const alunosView = new AlunosView(document.querySelector('[data-table-alunos]'), new MateriasServices().materias)

const alunosController = new AlunosController(alunosService, alunosView)

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault()
  const nome = document.getElementById("first_name").value
  if(!nome){
    throw new Error('precisa de um nome')
  }
  alunosController.add({ nome });
  
  document.getElementById("first_name").value = ''
})

document.querySelector('#search_name').addEventListener('input', function(){
  const name = this.value

  sessionStorage.setItem('search', name)
  
  if(name.length > 2 || name.length === 0){
    alunosController.search(name)
  }
})

/*createEvent() @deprecated

const inputEvent_IE = document.createEvent('Event')
inputEvent_IE.initEvent('input', true, true)

if(sessionStorage.getItem('search')){
  document.querySelector('#search_name').value = sessionStorage.getItem('search')
  //document.querySelector('#search_name').dispatchEvent(inputEvent)
  document.querySelector('#search_name').dispatchEvent(inputEvent_IE)
} */

const inputEvent = new Event("input")

if(sessionStorage.getItem("search")){
  document.querySelector("#search_name").value = sessionStorage.getItem("search")
  document.querySelector("#search_name").dispatchEvent(inputEvent)
}
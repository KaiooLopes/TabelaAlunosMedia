class EditAlunoView{
  constructor(form, materias){
    this.form = form
    this.container = form.querySelector('[data-edit-notas]')
    this.materias = materias
  }

  render(aluno){
    let htmlNotas = ''
    const html = this.materias.forEach(materia => {
      htmlNotas += `
      <div class="row" data-materia='${materia}'>
          <div class="input-field col s4">
            <input
              id="materia_${materia}"
              type="text"
              class="validate"
              readonly
              value='${materia}'
            />
            </div>
            <div class="input-field col s2">
            <input
              data-trimestre='1'
              id="nota_${materia}_1"
              type="number"
              class="validate"
              value='${aluno.notas[materia]?.[0]}'
            />
            </div>
            <div class="input-field col s2">
            <input
              data-trimestre='2'
              id="nota_${materia}_2"
              type="number"
              class="validate"
              value='${aluno.notas[materia]?.[1]}'
            />
            </div>
            <div class="input-field col s2">
            <input
              data-trimestre='3'
              id="nota_${materia}_3"
              type="number"
              class="validate"
              value='${aluno.notas[materia]?.[2]}'
            />
          </div>
          <div class="input-field col s2">
            <input
              data-trimestre='4'
              id="nota_${materia}_4"
              type="number"
              class="validate"
              value='${aluno.notas[materia]?.[3]}'
            />
          </div>
        </div>
      `
    })
    this.container.innerHTML = htmlNotas
  }
}
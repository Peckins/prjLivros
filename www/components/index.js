// arquivo de configurações da página index.html

// função de verificar inputs
export const verificacaoInputs = {
  input: document.querySelectorAll('input').value,
  verificarInput: (inputs) => {
    if (this.input == null){
      alert('preencha todos os campos!');
      inputs = false;
    }
    else{
      inputs = true;
    }
  }
};

const botao = document.querySelector('#btnCadastrar');
botao.addEventListener('click', () => {
  alert('funfou');
});
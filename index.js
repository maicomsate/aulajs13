document.getElementById("formularioLoja").addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nomeLoja = document.getElementById('nomeLoja').value;
    const cidade = document.getElementById('cidade').value;
    const vendasTotais = document.getElementById('vendasTotais').value;
    const resultadoDiv = document.getElementById('resultado');
    
    resultadoDiv.textContent ='';

    try {
        if (!nomeLoja || !cidade || !vendasTotais) {
            throw new Error('Todos os campos devem estar preenchidos');
        }

        if (vendasTotais < 0) {
            throw new Error('O valor de vendas deve ser maior ou igual a zero');
        }

        resultadoDiv.textContent = 'Cadastro realizado';
        resultadoDiv.style.color = 'green';

    } catch (error) {
        
        const errorDiv = document.createElement('div');
        errorDiv.textContent = error.message;
        errorDiv.style.color = 'red';
        resultadoDiv.appendChild(errorDiv);

        
        const recarregar = document.createElement('button');
        recarregar.textContent = 'Recarregar Página';
        recarregar.addEventListener('click', function() {
            location.reload();
        });
        resultadoDiv.appendChild(recarregar);

    } finally {
      
        if (resultadoDiv.textContent !== 'Cadastro realizado') {
            console.log('Validação concluída');
        }
    }
});

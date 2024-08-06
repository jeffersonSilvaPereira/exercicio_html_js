document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

        var campoA = parseFloat(document.getElementById('campoA').value);
        var campoB = parseFloat(document.getElementById('campoB').value);
        var messageDiv = document.getElementById('message');

        if (campoB > campoA) {
            messageDiv.textContent = "O formulário é válido!";
            messageDiv.className = "message success";
        } else {
            messageDiv.textContent = "O número no Campo B deve ser maior que o número no Campo A.";
            messageDiv.className = "message error";
        }
});
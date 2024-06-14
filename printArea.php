<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Captura de Tela com html2canvas</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <style>
        #capture {
            padding: 10px;
            background: #f5da55;
        }
        #download {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div id="capture">
        <h1>Texto para capturar</h1>
        <p>Esta é a área que será capturada como imagem.</p>
    </div>
    <button id="download">Baixar Imagem</button>

    <script>
        document.getElementById('download').addEventListener('click', function() {
            html2canvas(document.querySelector("#capture")).then(canvas => {
                // Cria um link para download
                var link = document.createElement('a');
                link.download = 'captura.png';
                link.href = canvas.toDataURL();
                link.click();
            });
        });
    </script>
</body>
</html>

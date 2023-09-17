const selectElement = document.getElementById('mySelect');
            
            selectElement.addEventListener('change', (event) => {
                const selectedOption = event.target.value;
                if (selectedOption !== '') {
                window.open(selectedOption, '_blank'); // Abre el enlace en una nueva ventana
                }
            });
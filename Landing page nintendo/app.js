document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento que será executado quando o DOM estiver completamente carregado.
    const swiper = new Swiper('.swiper', {
        // Cria uma nova instância do Swiper (carrossel), associada ao contêiner com a classe 'swiper'.
        direction: 'horizontal',
        // Define a direção de transição dos slides como horizontal.
        loop: false,
        // Define que o carrossel não irá repetir os slides (não fará looping).

        pagination: {
            el: '.swiper-pagination'
            // Configura a paginação (indicadores de slide) utilizando o seletor '.swiper-pagination'.
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
            // Define os botões de navegação para avançar ('.swiper-button-next') e retroceder ('.swiper-button-prev') os slides.
        }
    });

    document.addEventListener('keydown', function (event) {
        // Adiciona um listener para eventos de teclado.
        if(event.key === 'ArrowLeft') {
            swiper.slidePrev();
            // Se a tecla pressionada for a seta para a esquerda, move para o slide anterior.
        } else if(event.key === 'ArrowRight') {
            swiper.slideNext();
            // Se a tecla pressionada for a seta para a direita, move para o próximo slide.
        }
    });

    const loginButton = document.getElementById('loginButton')
    // Seleciona o elemento de entrada de texto com o ID 'loginInput'.

    const loginInput = document.getElementById('loginInput')
    // Seleciona o elemento de entrada de texto com o ID 'loginInput'.

    const loginDiv = document.querySelector('.login');
    // Seleciona o elemento com a classe 'login'.

    loginButton.addEventListener('click', function (){
        // Adiciona um evento que será disparado quando o botão de login for clicado.

        const email = loginInput.value.trim();
        // Obtém o valor do campo de entrada, remove espaços em branco nas extremidades.

        if (email) {
            
            loginInput.style.display = 'none';
            loginButton.style.display = 'none';
            // Remove o input e o botão de login

            const logoutButton = document.createElement('button');
            logoutButton.textContent = 'Logout';
            logoutButton.id = 'logoutButton';
            loginDiv.appendChild(logoutButton);
            // Cria e adiciona o botão de logout

            const emailText = document.createElement('span');
            emailText.textContent = `${email}`;
            emailText.id = 'userEmail';
            loginDiv.appendChild(emailText);
            // Adiciona o email como texto na div de login
            
            loginDiv.style.width = '300px';
            loginDiv.style.transform = 'translateX(-20px)';
            // Modifica a largura e a posição da div de login

            logoutButton.addEventListener('click', function () {
            // Evento para o botão de logout
                loginDiv.removeChild(logoutButton);
                loginDiv.removeChild(emailText);
                // Remove o botão de logout e o texto do email

                loginInput.value = '';
                // Limpa o campo de entrada
                
                loginInput.style.display = 'inline';
                loginButton.style.display = 'inline';
                // Volta a exibir o input e o botão de login

                loginDiv.style.width = '';
                loginDiv.style.transform = '';
                // Restaura a largura e a posição da div de login
            });
        }
    })

    const modal = document.getElementById('modal-contact');
    // Seleciona o elemento de modal com o ID 'modal-contact'.

    const openModalButton = document.getElementById('open-modal-btn');
    // Seleciona o botão para abrir o modal com o ID 'open-modal-btn'.

    const openModalButtonClone1 = document.getElementById('open-modal-btn-clone1');
    // Seleciona o botão para abrir o modal com o ID 'open-modal-btn-clone'.

    const openModalButtonClone2 = document.getElementById('open-modal-btn-clone2');

    
    const closeModalButton = document.getElementById('close-icon');
    // Seleciona o botão para fechar o modal com o ID 'close-modal-btn'.


    // ***OBS: concordo que os comandos "openModalButtonclone" são nenhum pouco coerentes, afinal só é preciso fazer
    // um querySelectorAll em "openModalButton" e um forEach. Tentei fazer assim, mas não deu certo. O NodeList do querry não retornava os elementos(NodeList = [])***
    openModalButton.addEventListener('click', function () {
        // Adiciona um evento que será disparado quando o botão para abrir o modal for clicado.
        modal.showModal();
        // Abre o modal.
    });

    openModalButtonClone1.addEventListener('click', function () {
        // Adiciona um evento que será disparado quando o botão para abrir o modal for clicado.
        modal.showModal();
        // Abre o modal.
    });

    openModalButtonClone2.addEventListener('click', function () {
        // Adiciona um evento que será disparado quando o botão para abrir o modal for clicado.
        modal.showModal();
        // Abre o modal.
    });

    closeModalButton.addEventListener('click', function () {
        // Adiciona um evento que será disparado quando o botão para fechar o modal for clicado.
        modal.close();
        // Fecha o modal.
    });

    let submitBtn = document.getElementById('submit-btn')
    let userName = document.getElementById('name')
    let userEmail = document.getElementById('email')
    let userNumPhone = document.getElementById('phone')
    let userComment = document.getElementById('comment')
    // Seleciona os elementos de entrada de texto com os IDs 'name', 'email', 'phone' e 'comment'.

    function limpar_formulario(){
        document.getElementById('name').value = ('')    
        document.getElementById('email').value = ('')
        document.getElementById('phone').value = ('')
        document.getElementById('comment').value = ('')    
    }
    // Função para limpar o formulário.

    submitBtn.addEventListener('click', (event) =>{
        event.preventDefault()

        let validaNome = /^[a-zA-Z\s]+$/
        userNumPhone.value = userNumPhone.value.replace(/\D/g, '')
        let validaTelefone = /^[0-9]{11}$/;
        // Expressões regulares para validar o nome, telefone e email.

        if((userName.value).trim() === ""){
            document.getElementById('name').value = ('')
            userName.placeholder = "Nome com falta de caracteres"
            // Se o campo de nome estiver vazio, limpa-o e define um placeholder.
        }
        else if(validaNome.test(userName.value) === false){
            document.getElementById('name').value = ('')
            userName.placeholder = "Caracteres numéricos e especiais não são permitidos no nome"
            // Se o nome contiver caracteres numéricos ou especiais, limpa-o e define um placeholder.
        }
        if((userEmail.value).trim() === ''){
            document.getElementById('email').value = ('')
            userEmail.placeholder = "Email com falta de caracteres"
            // Se o campo de email estiver vazio, limpa-o e define um placeholder.
        }
        if((userNumPhone.value).trim() === ''){
            document.getElementById('phone').value = ('')
            userNumPhone.placeholder = "Telefone com falta de caracteres"
            return
            // Se o campo de telefone estiver vazio, limpa-o e define um placeholder.
        }
        else if(validaTelefone.test(userNumPhone.value) === false){
            document.getElementById('phone').value = ('')
            userNumPhone.placeholder = "Está fora dos limites de caracteres permitidos."
            return
            // Se o telefone estiver fora dos limites, limpa-o e define um placeholder.
        }
        
        function sendEmail(){
            let parms = {
                name : userName.value,
                email : userEmail.value,
                phone : userNumPhone.value,
                message : userComment.value
                // Cria um objeto com os dados do formulário.
            }
            emailjs.send('service_nvgs9ik','template_m9rhkhq',parms).then(() => {
                alert("Email enviado!!")
                limpar_formulario()
                // Envia o email e limpa o formulário.
            })
        }

        sendEmail()
        // Envia o email.
    })

    const gameInput = document.getElementById('gameInput');
    // Seleciona o elemento de entrada de texto com o ID 'gameInput'.

    gameInput.addEventListener('keypress', function (event){
        // Adiciona um evento que será disparado quando uma tecla for pressionada no campo de entrada.
        if(event.key === 'Enter'){
            // Verifica se a tecla pressionada foi 'Enter'.
            let searchGame = gameInput.value.trim().toUpperCase();
            // Obtém o valor do campo de entrada, remove espaços em branco nas extremidades e converte para maiúsculas.

            switch(searchGame){
                case 'MARIO':
                    swiper.slideTo(0);
                    // Se o valor digitado for 'MARIO', move para o primeiro slide (índice 0).
                    break;
                case 'POKEMON':
                    swiper.slideTo(1);
                    // Se o valor digitado for 'POKEMON', move para o segundo slide (índice 1).
                    break;
                default:
                    alert('Jogo não foi encontrado');
                    // Se o valor não corresponder a nenhum dos casos, exibe um alerta informando que o jogo não foi encontrado.
                    break;
            }
        }
    });
});
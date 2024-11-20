# Gaming Website Landing Page - Projeto de Aprimoramento

Este projeto é uma **aprimoração de uma landing page já existente** no repositório: [maisPraTi-2024-02](https://github.com/jhyago/maisPraTi-2024-02/tree/main/2-html-css-js/6-landing-page). A landing page tem como objetivo oferecer uma experiência interativa para os usuários, com foco no mundo dos jogos, apresentando produtos, trailers e interações dinâmicas por meio de carrosséis de imagens, modais e animações.

## Objetivo

O objetivo deste projeto é criar uma landing page para promover jogos, incluindo funcionalidades interativas como:
- **Carrosséis de imagens** (Swiper) para exibição de diferentes jogos.
- **Formulário de contato** com validação de dados e integração com o serviço **EmailJS** para envio de e-mails.
- **Navegação interativa** com botões para login e modais.

Essa página foi aprimorada para incluir **melhorias semânticas**, **acessibilidade** e uma **interface mais interativa**.

## Funcionalidades

- **Carrossel de Jogos (Swiper):** 
  - Exibe banners de jogos com a possibilidade de navegação entre as opções utilizando botões de navegação e teclas de seta.
  - Cada slide pode conter informações como descrição, avaliação, trailer e links para compra.
  
- **Modal de Contato:**
  - Permite que os usuários entrem em contato com os desenvolvedores. 
  - Abertura e fechamento do modal com animações.
  - Formulário com campos para nome, e-mail, telefone e comentário.
  - **Validação de dados** do formulário, incluindo verificação de formato de telefone e e-mail.

- **Integração com EmailJS:**
  - O formulário de contato envia os dados para um serviço de e-mail usando **EmailJS**, permitindo que os desenvolvedores recebam os comentários diretamente no e-mail.

- **Login e Logout Dinâmicos:**
  - Permite que o usuário se logue e se deslogue, exibindo seu e-mail ao fazer login.
  
- **Acessibilidade:**
  - Uso de **atributos ARIA** para melhorar a experiência de navegação para pessoas com deficiências.
  - **Títulos e botões semânticos** para uma navegação mais intuitiva.

## APIs Utilizadas

- **Swiper:** 
  A biblioteca **Swiper** é utilizada para criar os carrosséis interativos de jogos. Ela permite a navegação entre os slides, com suporte para navegação por teclas de seta e botões.
  - [Link para a documentação do Swiper](https://swiperjs.com/)

- **EmailJS:** 
  O serviço **EmailJS** é utilizado para enviar os dados do formulário de contato para o e-mail do desenvolvedor. Não há necessidade de configurar um servidor para isso, já que o serviço é completamente baseado em nuvem.
  - [Link para a documentação do EmailJS](https://www.emailjs.com/docs/)

## Como Rodar o Projeto

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/seuusuario/nome-do-repositorio.git

## Link do website

- [Website Nintendo](https://game-website-landing-page-improvement.netlify.app/)

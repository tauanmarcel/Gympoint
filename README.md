<p align="center">
    <img src="https://raw.githubusercontent.com/tauanmarcel/Gympoint_Mobile/master/src/assets/logo.png"/>
</p>


# GYMPOINT API

Desenvolvi a aplicação usando as configurações abaixo:

    . Banco de dados principal: Postgres
    . Armazenamento de falhas: Redis
    . Sistema Operacional: Windows 10 Home Single Language
    . Serviços: Docker Toolbox
    . Dispositivo de teste: Insomnia


# GYMPOINT WEB

Desenvolvi a aplicação usando as configurações abaixo:

    . API: gympoint_api
    . Dispositivo de teste: Google Chrome


# GYMPOINT MOBILE

Tentei seguir fielmente o layout com uma exceção:
    - Levando em consideração que o usuário normalmente deseja continuar logado na aplicação, apesar de não haver autenticação, decidi implementar a persistência dos dados do usuário, que nesse caso é apenas o id que recebeu da academia quando realizou sua matrícula.
    E se existe a persistência dos dados então deve existir uma forma de sair da aplicação, então coloquei um simples botão na aba de navegação que executa o método de logout.

## Novas funcionalidades

Para não fugir muito do layout, coloquei apenas um botão de sair, mas após a entraga do aplicativo para avaliação, pretendo continuar desenvolvendo algumas funcionalidades nele que acredito serem úteis para o aplicativo, por exemplo:

    1 - O aluno receberá notificações quando receber resposta de algum pedido de auxílio que realizou.
    2 - Autenticação e uma página de perfil assim como a do Gobarber.
    3 - O aluno poderá acompanhar sua evolução, utilizando o registro de seu peso, por exemplo.
    4 - Um tela com mensagens da academia, que podem ser dicas ou fatos extraordinários, como o funcionamento ou não da academia em feriados. O aluno receberá notificações quando a academia enviar novas mensagens.

## Considerações finais

Desenvolvi o aplicativo usando as configurações abaixo:

    . API: gympoint_api
    . Plataforma: Android
    . Sistema Operacional: Windows 10 Home Single Language
    . Dispositivos de teste: 
        - Genymotion Samsung Galaxy S6 - 6.0.0 - API 23 (Virtual)
        - Samsung Galaxy A500M/DS - Android 6.0.1 (Físico)
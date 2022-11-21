
#Bem vindo ao projeto NGCASH

Projeto desenvolvido para o processo seletivo da trybe.

utilizando o docker, node e react, foi construido um app que utiliza de uma API criada
do 0 para fornercer informacoes financeiras aos usuarios do APP.




## Autor

- [@HumbertoCastro](https://www.github.com/HumbertoCastro)


## Deploy

Para fazer o deploy desse projeto é necessario alguns passos

Primeiramente, vc devera entrar nos dois diretorios, o /app/back-end e o /app/front-end
e instalar as dependencias utilizando do comando

```bash
  npm install
```

apos instalar as dependencias, voce devera subir o back-end do projeto, utilizando o comando

```bash
  npm run db:reset
```

(obs: esse comando deve ser utilizado dentro da pasta /app/back-end)

e por fim, entrar na pasta /app/front-end e rodar o comando 
```bash
  npm start
```

assim, voce ja podera utilizar do projeto no localhost:3001;

## Deploy COM DOCKER

O docker do projeto ja esta configurado e pronto para rodar. mas ate o presente momento,
o docker so funciona para o front-end, algum erro esta impedindo o back-end de funcionar e suprir as informaçoes requisitadas.

caso queira testar o docker, basta utilizar o comando 

```bash
  npm run compose:up
```
para subir o conteiner

e o comando 
```bash
  npm run compose:down
```

para dropar o container

### TESTES UNITARIOS

O projeto conta com testes unitarios feitos para o back-end utilizando do 
```bash
  "frisby"
```

para rodar os testes, basta subir o back-end pelo comando
```bash
  npm run db:reset
```

e apos, ir para a pasta principal do projeto ( certifique-se de sair da pasta /app/back-end ou da /app/front-end para rodar os testes)

agora na pasta principal, rode o comando

```bash
  npm test
```







## Screenshots do projeto

![App Screenshot](/images/login.png)

TELA DE LOGIN

![App Screenshot](/images/homepage.png)

TELA PRINCIPAL

![App Screenshot](/images/register.png)

TELA DE REGISTRO

## Stack utilizada

**Front-end:** React, Redux, JS

**Back-end:** Node, Express


## Aprendizados

Desenvolvendo o projeto, eu consegui me aprofundar muito nos conceitos de integraçao de Aprendizados
EXPRESS e o REACT como um todo.

Foi uma experiencia extremamente gratificante poder construir um site do 0, utilizando de projetos e conhecimentos
que eu ja havia adquirido na trybe e em outros projetos pessoais.

Administrar o tempo e as tasks necessarias para a finalizaçao completa do projeto,
me planejar com um scoopo bem definido do que seria feito, e do que poderia vir a ser um bonus
me deu um noçao muito boa de organizaçao e construçao de um projeto, como em um momento
no meio do desenvolvimento, onde eu vi que para conseguir finalizar o projeto num prazo que eu havia planejado
eu deveria me abster da opçao de incluir TYPESCRIPT no projeto, escolhendo por entregar algo completo e finalizado, mas sem essa
outra linguagem sendo utilizada.


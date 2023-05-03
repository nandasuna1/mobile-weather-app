# Weather app

https://user-images.githubusercontent.com/62397262/236048513-3ba15347-0792-4f41-aa63-a592a7de8fec.mp4



## Instruções de uso
1. Obtenção de repositório, seja por clone ou fork
2. O código do app está dentro na pasta weather-app, então você precisa estar nela para rodar o projeto . Pode ser usado no terminal da pasta o comando:
<code>cd weather-app </code>

3. Será necessatio instalar o node_modules atravez do comando:

<code> npm i</code>

4. Após obetr as dependencias do projeto, na pasta do mesmo digite o comando:

<code> npm start</code>


### OBS
Devido a api ter restrições na versão gratuita existe um numero <b>limitado</b> de chamadas que podem ser feitas. Por isso, caso o app pare de demonstar informações é possivel que tenha alcançado seu limite. Como alternativa criei uma outra chave, e para alterar esta basta is para o arquivo
</br>
<code>weather-app/src/services/weatherApi.ts</code>
</br>
e mudar 
</br>
<code>const baseUrl = process.env.BASE_URL_TWO;
</code>
</br>
para:
</br>
<code>const baseUrl = process.env.BASE_URL_THREE;
</code>
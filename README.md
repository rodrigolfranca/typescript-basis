# typescript-basis

Começa iniciando um dev environment:
>npm init -y

Isso vai criar o package.json.

Instala as libs básicas:
>npm install typescript express body-parser @types/body-parser @types/express --save

E depois o 'nodemon' pra typescript:
>npm install ts-node-dev --save-dev

Nos scripts, no package.json adciona a seguinte linha:
>"start": "ts-node-dev --respawn /src/index.ts"

Pra configurar o typescript rode o comando:
>tsc --init

Isso vai criar o tsconfig.json basico, normalmente eu só edito a "outDir" e limpo os comentários, mas cada linha tem um comentario explicando o que ela faz.

A partir daqui é código.

# Portfólio pessoal — CP3

Projeto desenvolvido a partir do CP2. As cinco páginas originais foram mantidas e receberam recursos de JavaScript para o CP3.

## Estrutura

- `index.html`: apresentação
- `curriculo.html`: currículo
- `formulario.html`: formulário de contato
- `multimidia.html`: recursos de áudio, vídeo e YouTube
- `graficos.html`: Canvas e SVG
- `css/estilos.css`: estilos e temas claro/escuro
- `js/scripts.js`: interatividade, persistência e validação

## Funcionalidades CP3

- Alternância entre tema claro e escuro em todas as páginas.
- Preferência de tema salva em `localStorage` e restaurada ao navegar ou recarregar.
- Validação do formulário com feedback visual na própria página.
- Desenho Canvas controlado pelo arquivo JavaScript externo.
- Layout responsivo preservado.

## Teste local

Abra `index.html` no navegador. Navegue pelas cinco páginas, alterne o tema e recarregue a página para conferir a persistência. No formulário, teste campos vazios e dados válidos.

**Atenção:** o formulário é uma demonstração front-end. A validação funciona, mas os dados não são enviados nem armazenados em um servidor.

## Multimídia

A pasta `media/` está sem arquivos no CP2 recebido. Para que os controles locais de áudio e vídeo reproduzam conteúdo, adicione:
- `media/video-exemplo.mp4`
- `media/audio-exemplo.mp3`

O vídeo incorporado do YouTube depende de conexão com a internet.

## Git e GitHub — roteiro para a entrega

Na pasta do projeto, abra o terminal e execute os comandos abaixo. Substitua a URL pela URL real do repositório criado na sua conta:

```bash
git init
git add .
git commit -m "CP3: organizar estrutura e preservar páginas do CP2"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main

git switch -c feature/tema-escuro
git add .
git commit -m "Adicionar tema claro e escuro com localStorage"
git switch main
git merge feature/tema-escuro
git push origin main

git tag -a cp3-entrega -m "Entrega CP3: Git, deploy e JavaScript"
git push origin cp3-entrega
```

Se o Git já estiver inicializado no seu computador, não repita `git init` nem adicione novamente o remoto. Confira antes com `git status` e `git remote -v`.

## Publicação no GitHub Pages

1. Envie o projeto para o GitHub.
2. Abra **Settings > Pages** no repositório.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/ (root)`.
5. Salve e aguarde a publicação.
6. Abra o endereço publicado em uma janela anônima e teste as cinco páginas, o menu, o tema e o formulário.

O endereço costuma seguir o formato `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.

# QA e lançamento — Água Mel

## Validado localmente

- [x] Layout sem overflow horizontal a 320, 360, 390, 768, 820, 1024 e 1440 px.
- [x] Hero, cerros, memórias, sabores e visita revistos visualmente em mobile, tablet e desktop.
- [x] Atalhos **Entre**, **Visitar**, **Voltar ao início** e **Saltar para o conteúdo** presentes e funcionais.
- [x] Conteúdo principal estruturado com headings, regiões, listas, texto alternativo e foco visível.
- [x] Animações ligadas ao scroll e alternativa `prefers-reduced-motion`.
- [x] Página, `robots.txt` e `sitemap.xml` gerados estaticamente.
- [x] Build de produção testada com respostas HTTP 200 nas três rotas.
- [x] Sem erros ou avisos da aplicação na consola após a correção da imagem principal.
- [x] Next.js atualizado para 16.3.3 e `npm audit --omit=dev` concluído com zero vulnerabilidades.
- [x] Sem analytics, cookies de medição ou pedidos a serviços externos na página.
- [x] Cabeçalhos básicos: `nosniff`, bloqueio de iframe, política de referência e permissões de câmara/microfone/localização desativadas.

## Validar antes de publicar

- [ ] Rever num iPhone real com Safari.
- [ ] Rever num Android real com Chrome.
- [ ] Testar numa ligação móvel lenta e confirmar o novo vídeo de entrada.
- [ ] Confirmar história, produtos, horário, telefone, Instagram, morada e créditos com a família.
- [ ] Substituir todo o conteúdo marcado como provisório.
- [ ] Definir a plataforma de alojamento e configurar `NEXT_PUBLIC_SITE_URL` se o endereço final não for `https://aguamel.pt`.
- [ ] Ligar o domínio, confirmar HTTPS, testar partilhas sociais e pedir indexação.

## Estado do domínio e alojamento

Verificado em 27 de agosto de 2026:

- `aguamel.pt` responde por HTTPS e está protegido pela Cloudflare.
- O domínio continua a apresentar o site Mobirise antigo, cuja página indica última alteração em junho de 2023.
- O repositório não contém configuração de Vercel, Netlify, Cloudflare Pages ou outro alojamento.
- O GitHub CLI não tem uma sessão autenticada nesta máquina.

Para publicar sem arriscar substituir o site atual no serviço errado, falta identificar o alojamento de origem e obter acesso à conta correspondente.

## Decisões da primeira versão

- Português como idioma publicado inicialmente; tradução inglesa preparada para revisão.
- Sem francês na primeira versão.
- Sem analytics até existir uma necessidade concreta de medição.
- Sem 3D.
- Um único vídeo de entrada no hero, apenas quando a gravação final estiver disponível.

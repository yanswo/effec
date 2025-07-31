# Fontes do Projeto NovaEffectus

link: https://yanswo.github.io/effec/

## Fontes Disponíveis

O projeto utiliza duas famílias de fontes principais:

### 1. FixelDisplay

- **FixelDisplay-Regular**: Fonte padrão para texto normal
- **FixelDisplay-Medium**: Para textos com peso médio
- **FixelDisplay-Bold**: Para títulos e textos em negrito

### 2. NovaPoshta

- **NovaPoshta-Regular**: Fonte secundária para texto normal
- **NovaPoshta-Medium**: Para textos com peso médio
- **NovaPoshta-Bold**: Para títulos e textos em negrito

## Como Usar as Fontes

### No CSS

```css
/* Usando FixelDisplay */
.fixel-regular {
  font-family: FixelDisplay-Regular, Arial, sans-serif;
}

.fixel-medium {
  font-family: FixelDisplay-Medium, Arial, sans-serif;
}

.fixel-bold {
  font-family: FixelDisplay-Bold, Arial, sans-serif;
}

/* Usando NovaPoshta */
.novaposhta-regular {
  font-family: NovaPoshta-Regular, Arial, sans-serif;
}

.novaposhta-medium {
  font-family: NovaPoshta-Medium, Arial, sans-serif;
}

.novaposhta-bold {
  font-family: NovaPoshta-Bold, Arial, sans-serif;
}
```

### Fonte Padrão

A fonte padrão do projeto é **FixelDisplay-Regular**, definida no `body` do CSS:

```css
body {
  font-family: FixelDisplay-Regular, Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.25;
}
```

## Estrutura de Arquivos

```
fonts/
├── FixelDisplay-Bold.2ed3e38a.woff2
├── FixelDisplay-Bold.affddbf2.ttf
├── FixelDisplay-Medium.736d6950.woff2
├── FixelDisplay-Medium.baf8001e.ttf
├── FixelDisplay-Regular.410b2fa1.woff2
├── FixelDisplay-Regular.9dc7ab88.ttf
├── NovaPoshta-Bold.2fe771b1.woff2
├── NovaPoshta-Bold.90989985.ttf
├── NovaPoshta-Medium.047f06d3.woff2
├── NovaPoshta-Medium.85f1bd8a.ttf
├── NovaPoshta-Regular.2bff5a59.woff2
└── NovaPoshta-Regular.35032c18.ttf
```

## Configuração das Fontes

As fontes estão configuradas no arquivo `style.css` usando `@font-face`:

```css
@font-face {
  font-family: FixelDisplay-Regular;
  src: url(fonts/FixelDisplay-Regular.9dc7ab88.ttf) format("truetype"), url(fonts/FixelDisplay-Regular.410b2fa1.woff2)
      format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

## Teste das Fontes

Para testar se as fontes estão funcionando corretamente, abra o arquivo `test-fonts.html` no navegador. Este arquivo mostra exemplos de todas as fontes disponíveis.

## Características das Fontes

### FixelDisplay

- **Estilo**: Sans-serif moderna
- **Uso**: Principalmente para títulos e textos importantes
- **Características**: Limpa, legível e profissional

### NovaPoshta

- **Estilo**: Sans-serif geométrica
- **Uso**: Para textos secundários e complementares
- **Características**: Moderna e versátil

## Fallbacks

Todas as fontes têm fallbacks configurados:

- Arial (sans-serif padrão do sistema)
- Helvetica (para sistemas que suportam)
- sans-serif (fallback genérico)

## Performance

As fontes estão otimizadas com:

- **font-display: swap**: Carrega a fonte do sistema primeiro, depois troca pela fonte personalizada
- **Formato WOFF2**: Formato mais eficiente para web
- **Formato TTF**: Fallback para navegadores mais antigos

## Troubleshooting

Se as fontes não estiverem carregando:

1. Verifique se os arquivos estão na pasta `fonts/`
2. Confirme se os caminhos no CSS estão corretos
3. Abra o arquivo `test-fonts.html` para testar
4. Verifique o console do navegador para erros
5. Certifique-se de que o servidor web está servindo os arquivos corretamente

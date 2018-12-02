let express = require('express'),
    router = express.Router();

router.get('/noticias', (req, res) => {
  res.status(200);
  res.json([{
      "titulo": "Titulo 1",
      "desc": "Descrição 1",
      "detalhe": "Detalhe de conteúdo 1",
      "img": "https://materializecss.com/images/office.jpg",
      "link": "#linkaqui"
    },
    {
      "titulo": "Titulo 2",
      "desc": "Descrição 2",
      "detalhe": "Detalhe de conteúdo 2",
      "img": "https://materializecss.com/images/office.jpg",
      "link": "#linkaqui"
    },
    {
      "titulo": "Titulo 3",
      "desc": "Descrição 3",
      "detalhe": "Detalhe de conteúdo 3",
      "img": "https://materializecss.com/images/office.jpg",
      "link": "#linkaqui"
    },
    {
      "titulo": "Titulo 4",
      "desc": "Descrição 4",
      "detalhe": "Detalhe de conteúdo 4",
      "img": "https://materializecss.com/images/office.jpg",
      "link": "#linkaqui"
    },
    {
      "titulo": "Titulo 5",
      "desc": "Descrição 5",
      "detalhe": "Detalhe de conteúdo 5",
      "img": "https://materializecss.com/images/office.jpg",
      "link": "#linkaqui"
    },
    {
      "titulo": "Titulo 6",
      "desc": "Descrição 6",
      "detalhe": "Detalhe de conteúdo 6",
      "img": "https://materializecss.com/images/office.jpg",
      "link": "#linkaqui"
    },
    {
      "titulo": "Titulo 7",
      "desc": "Descrição 7",
      "detalhe": "Detalhe de conteúdo 7",
      "img": "https://materializecss.com/images/office.jpg",
      "link": "#linkaqui"
    }
  ]);
});

router.get('/menus', (req, res) => {
  res.status(200);
  res.json([
    {titulo: 'Home', link: '#home'},
    {titulo: 'Sobre', link: '#sobre'},
    {titulo: 'Contato', link: '#contato'},
  ]);
});

module.exports = router;
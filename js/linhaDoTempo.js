  if (localStorage.getItem('logado') !== 'true') {
    window.location.href = '../public/Entrar.html';
  }

const eventos = [
  {
    titulo: "Nos conhecemos",
    data: "03/10/2022",
    descricao: "Essa foi a data que você me chamou no Instagram pra conversar pela primeira vez.",
    imagem: "../Images/primeiraConversa.jpg"
  },
  {
    titulo: "Primeiro baile de primavera",
    data: "29/10/2022",
    descricao: "Esse foi o dia do nosso primeiro baile (segundo encontro, mas não temos registros do primeiro) e onde demos nosso primeiro beijo.",
    imagem: "../Images/baile.jpg"
  },
  {
    titulo: "Pedido de namoro!",
    data: "03/12/2022",
    descricao: "Tornamos tudo oficial nesse dia! (também não temos fotos do ocorrido, apenas relatos)",
    imagem: "../Images/namoro.jpg"
  },
  {
    titulo: "Longes... :(",
    data: "25/12/2022",
    descricao: "Aqui foi o dia que eu tive que viajar pra longe de você.",
    imagem: "../Images/longes.jpg"
  },
  {
    titulo: "Juntos! :)",
    data: "27/02/2023",
    descricao: "Finalmente nos juntamos depois de milhares de anos!.",
    imagem: "../Images/juntos.jpg"
  },
  {
    titulo: "Juntos por um tempão!",
    data: "25/03/2023",
    descricao: "Esse foi o dia que praticamente fiquei a noite inteira do seu ladinho.",
    imagem: "../Images/juntosDnv.png"
  },
  {
    titulo: "Jogando juntos",
    data: "22/07/2023",
    descricao: "Outro dia que fiquei a noite inteira do seu ladinho, mas jogando!",
    imagem: "../Images/jogano.png"
  },
  {
    titulo: "Um ano juntos",
    data: "03/12/2023",
    descricao: "Um ano apos ter te conhecido, e eu mal conseguia acreditar que estava com você.",
    imagem: "../Images/ano1.png"
  },
  {
    titulo: "Baile 2.0",
    data: "08/10/2023",
    descricao: "O segundo baile de primavera, a nostalgia e o sentimento de estar passando por isso com vc dnv era surreal.",
    imagem: "../Images/baile2.0.jpg"
  },
  {
    titulo: "Aniversário de namoro",
    data: "03/12/2023",
    descricao: "Nosso primeiro aniversário de namoro! Você linda com a aliança nova.",
    imagem: "../Images/1anoNamoro.jpg"
  },
  {
    titulo: "Primeiro natal juntos",
    data: "25/12/2023",
    descricao: "pela primeira vez ficamos juntos no natal e foi simplesmente incrível (a gente viu shrek, foda)." ,
    imagem: "../Images/natal.jpg"
  },
  {
    titulo: "Primeiro ano novo juntos",
    data: "01/01/2024",
    descricao: "Primeiro ano novo juntos, assistindo o show de fogos e fznd graça do seu ladinho",
    imagem: "../Images/anoNovo.jpg"
  },
  {
    titulo: "Formatura",
    data: "28/01/2024",
    descricao: "Dia da sua formatura, não tem a ver com a gente, mas foi uma data incrivel que me deixa muito feliz quando me lembro.",
    imagem: "../Images/formatura.jpg"
  },  
  {
    titulo: "Segundo aniversário juntos",
    data: "22/05/2024",
    descricao: "Dia do nosso segundo aniversário juntos, comemorando mais um ano do meu amor.",
    imagem: "../Images/aniversario.png"
  },
  {
    titulo: "Dia dos namorados",
    data: "12/06/2024",
    descricao: "Dia do nosso segundo Dia dos Namorados juntos, celebrando o amor que cresce a cada dia.",
    imagem: "../Images/diaDosNamorados.jpg" 
  },
  {
    titulo: "Festa junina",
    data: "22/06/2024",
    descricao: "Dia da festa junina na etec, não é a primeira, mas ta valendo.",
    imagem: "../Images/festaJunina.png"
  },
  {
    titulo: "Bienal do livro",
    data: "14/09/2024",
    descricao: "Primeiro dia que fomos para longe juntos, ainda compramos varios livros, foi incrivel.",
    imagem: "../Images/bienal.jpg"
  },
  {
    titulo: "Segundo aniversário de namoro parte 1",
    data: "14/12/2024",
    descricao: "A comemoração do nosso segundo aniversário de namoro, foi perfeito ver você tão feliz em um restaurante temárico.",
    imagem: "../Images/aniversarioDeNamoroPt-1.jpg"
  },
  {
    titulo: "Segundo aniversário de namoro parte 2",
    data: "15/12/2024",
    descricao: "Foi minha primeira vez na liberdade, e eu não poderia ter escolhido melhor companhia.",
    imagem: "../Images/aniversarioDeNamoroPt-2.jpg"
  },
  {
    titulo: "Segundo natal juntos",
    data: "25/12/2024",
    descricao: "O dia que passamos o natal com sua familia, esse dia também ta guardado no meu coração com muito carinho.",
    imagem: "../Images/natal2.0.jpg"
  },
  {
    titulo: "boliche",
    data: "20/01/2025",
    descricao: "O dia que jogamos boliche juntos, não ganhamos dos outros por pouco, mas foi incrivel.",
    imagem: "../Images/boliche.jpg"
  },
  {
    titulo: "Minha formatura da etec",
    data: "25/03/2025",
    descricao: "Esse foi um dia muito especial pra mim, não só por ser minha formatura, mas por você estar presente, obrifado por tudo.",
    imagem: "../Images/formatura.jpg"
  }
];

let index = 0;

const titulo = document.getElementById('titulo');
const data = document.getElementById('data');
const descricao = document.getElementById('descricao');
const imagem = document.getElementById('imagem');
const botaoAvancar = document.getElementById('avancar');
const botaoVoltar = document.getElementById('voltar');
const timeline = document.getElementById('timeline');

eventos.forEach((_, i) => {
  const step = document.createElement('div');
  step.classList.add('step');
  step.dataset.index = i;
  timeline.appendChild(step);
});

const steps = document.querySelectorAll('.step');

botaoAvancar.addEventListener('click', () => {
  if (index < eventos.length - 1) {
    index++;
    updateEvento();
  }
});

botaoVoltar.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateEvento();
  }
});

function updateEvento() {
  titulo.textContent = eventos[index].titulo;
  data.textContent = `Data: ${eventos[index].data}`;
  descricao.textContent = `Descrição: ${eventos[index].descricao}`;
  imagem.src = eventos[index].imagem;
  imagem.alt = eventos[index].titulo;

  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
  });

  steps[index].scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest'
  });

  botaoAvancar.disabled = index === eventos.length - 1;
  botaoVoltar.disabled = index === 0;
}

updateEvento();

  if (localStorage.getItem('logado') !== 'true') {
    window.location.href = '../public/Entrar.html';
  }

document.addEventListener("DOMContentLoaded", () => {
  const dataRelacionamento = new Date("2022-10-03T00:00:00");
  const dataVida = new Date("2005-05-22T00:00:00");

  const getPreciseAge = (start, end) => {
    let ano = end.getFullYear() - start.getFullYear();
    let mes = end.getMonth() - start.getMonth();
    let dia = end.getDate() - start.getDate();

    if (dia < 0) {
      mes--;
      dia += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    }
    if (mes < 0) {
      ano--;
      mes += 12;
    }
    return { anos: ano, meses: mes, dias: dia };
  };

  const formatarIdade = ({ anos, meses, dias }) =>
    `${anos} anos, ${meses} meses e ${dias} dias`;

  const curiosidadesVida = [
    ["Batimentos do coração desde que nasceu: ", "💓", null],
    ["Respirações desde que nasceu: ", "🌬️", null],
    ["Piscadas desde que nasceu: ", "👀", null],
    ["Horas dormindo na vida: ", "😴", null],
    ["Risadas na vida: ", "😂", null],
    ["Palavras ditas na vida: ", "🗣️", null],
    ["A luz percorreu desde que nasceu: ", "🌟", null],
    ["Idade completa: ", "📅", null],
    ["Segundos vividos: ", "⏱️", null],
    ["Minutos vividos: ", "⌛", null],
    ["Horas vividas: ", "⏳", null],
    ["Dias vividos: ", "📆", null]
  ];

  const curiosidadesRelacionamento = [
    ["Tempo de namoro: ", "🎂", null],
    ["Dias vividos ao meu lado: ", "📆", null],
    ["Horas vividas ao meu lado: ", "⏳", null],
    ["Minutos vividos ao meu lado: ", "⌛", null],
    ["Segundos vividos ao meu lado: ", "⏱️", null],
    ["Mensagens enviadas pra mim: ", "💌", null],
    ["Média das vezes que pensou em mim: ", "🧠", null]
  ];

  const criarCuriosidadeSection = (lista) => {
    const secao = document.createElement("div");
    secao.className = "secao";
    lista.forEach(item => {
      const [texto, emoji] = item;
      const div = document.createElement("section");
      div.className = "curiosidade section";
      div.innerHTML = `
        <div class="emoji">${emoji}</div>
        <div class="texto"></div>
      `;
      secao.appendChild(div);
      item[2] = div.querySelector(".texto");
    });
    return secao;
  };

  const introNascimento = document.querySelectorAll(".intro.section")[0];
  const introRelacionamento = document.querySelectorAll(".intro.section")[1];

  const curiosidadesVidaSecao = criarCuriosidadeSection(curiosidadesVida);
  const curiosidadesRelacionamentoSecao = criarCuriosidadeSection(curiosidadesRelacionamento);

  introNascimento.insertAdjacentElement("afterend", curiosidadesVidaSecao);
  introRelacionamento.insertAdjacentElement("afterend", curiosidadesRelacionamentoSecao);

  const atualizarCuriosidades = () => {
    const agora = new Date();

    const diffVida = agora - dataVida;
    const diffRelacionamento = agora - dataRelacionamento;

    const segundosVida = diffVida / 1000;
    const minutosVida = segundosVida / 60;
    const horasVida = minutosVida / 60;
    const diasVida = horasVida / 24;

    const segundosRelacionamento = Math.floor(diffRelacionamento / 1000);
    const minutosRelacionamento = Math.floor(diffRelacionamento / 60000);
    const horasRelacionamento = Math.floor(diffRelacionamento / 3600000);
    const diasRelacionamento = Math.floor(diffRelacionamento / 86400000);

    const idadeRelacionamentoObj = getPreciseAge(dataRelacionamento, agora);
    const idadeRelacionamento = formatarIdade(idadeRelacionamentoObj);

    const idadeVidaObj = getPreciseAge(dataVida, agora);
    const idadeVida = formatarIdade(idadeVidaObj);

    curiosidadesVida[7][2].textContent = `Idade completa: ${idadeVida}`;
    curiosidadesVida[11][2].textContent = `Dias vividos: ${Math.floor(diasVida).toLocaleString()}`;
    curiosidadesVida[10][2].textContent = `Horas vividas: ${Math.floor(horasVida).toLocaleString()}`;
    curiosidadesVida[9][2].textContent = `Minutos vividos: ${Math.floor(minutosVida).toLocaleString()}`;
    curiosidadesVida[8][2].textContent = `Segundos vividos: ${Math.floor(segundosVida).toLocaleString()}`;
    curiosidadesVida[0][2].textContent = `Batimentos do coração desde que nasceu: ${(segundosVida * 1.1).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    curiosidadesVida[1][2].textContent = `Respirações desde que nasceu: ${(segundosVida * (16 / 60)).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    curiosidadesVida[2][2].textContent = `Piscadas desde que nasceu: ${(segundosVida * (20 / 60)).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    curiosidadesVida[3][2].textContent = `Horas dormindo na vida: ${(horasVida * (8 / 24)).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    curiosidadesVida[4][2].textContent = `Risadas na vida: ${(diasVida * 17).toLocaleString(undefined, { maximumFractionDigits: 0 })} risadas`;
    curiosidadesVida[5][2].textContent = `Palavras ditas na vida: ${(diasVida * 16000).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    curiosidadesVida[6][2].textContent = `A luz percorreu desde que nasceu: ${(segundosVida * 299792.458).toLocaleString(undefined, { maximumFractionDigits: 0 })} km`;

    curiosidadesRelacionamento[0][2].textContent = `Tempo de namoro: ${idadeRelacionamento}`;
    curiosidadesRelacionamento[1][2].textContent = `Dias vividos ao meu lado: ${diasRelacionamento.toLocaleString()}`;
    curiosidadesRelacionamento[2][2].textContent = `Horas vividas ao meu lado: ${horasRelacionamento.toLocaleString()}`;
    curiosidadesRelacionamento[3][2].textContent = `Minutos vividos ao meu lado: ${minutosRelacionamento.toLocaleString()}`;
    curiosidadesRelacionamento[4][2].textContent = `Segundos vividos ao meu lado: ${segundosRelacionamento.toLocaleString()}`;
    curiosidadesRelacionamento[5][2].textContent = `Mensagens enviadas pra mim: ${(diasRelacionamento * 100).toLocaleString()}`;
    curiosidadesRelacionamento[6][2].textContent = `Média das vezes que pensou em mim: ${(diasRelacionamento * 50).toLocaleString()}`;
  };

  atualizarCuriosidades();
  setInterval(atualizarCuriosidades, 1000);

  const botaoVoltar = document.getElementById("voltar-topo");
  const sections = document.querySelectorAll('.section');
  let currentIndex = 0;
  let isScrolling = false;

  const scrollToSection = () => {
    sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      isScrolling = false;
    }, 800);
  };

  window.addEventListener('wheel', (e) => {
    if (isScrolling) return;
    isScrolling = true;

    if (e.deltaY > 0 && currentIndex < sections.length - 1) {
      currentIndex++;
    } else if (e.deltaY < 0 && currentIndex > 0) {
      currentIndex--;
    }

    scrollToSection();
  });

  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  });

  window.addEventListener('touchend', (e) => {
    const deltaY = touchStartY - e.changedTouches[0].clientY;

    if (Math.abs(deltaY) > 50 && !isScrolling) {
      isScrolling = true;

      if (deltaY > 0 && currentIndex < sections.length - 1) {
        currentIndex++;
      } else if (deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      }

      scrollToSection();
    }
  });

  botaoVoltar.addEventListener("click", () => {
    currentIndex = 0;
    scrollToSection();
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Array.from(sections).indexOf(entry.target);
        if (index !== -1) currentIndex = index;
        botaoVoltar.classList.toggle("show", currentIndex > 0);
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(section => observer.observe(section));
});

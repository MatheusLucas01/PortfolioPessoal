document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.box');
  
    // Função para verificar se o card está visível na tela
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    }
  
    // Função para animar os cards
    function animateCards() {
      cards.forEach((card) => {
        if (isInViewport(card)) {
          card.classList.add('animate');
        }
      });
    }
  
    // Verifica a visibilidade dos cards ao rolar a página
    window.addEventListener('scroll', animateCards);
    animateCards();  // Chama para aplicar a animação inicialmente
  });

  // Função que faz o nome aparecer na tela
  const text = "Matheus Lucas";
  let index = 0;
  const speed = 250; // Speed of typing

  function typeWriter() {
      if (index < text.length) {
          document.querySelector(".hero-content h2").innerHTML += text.charAt(index);
          index++;
          setTimeout(typeWriter, speed);
      } else {
          setTimeout(() => {
              document.querySelector(".hero-content h2").innerHTML = "";
              index = 0;
              typeWriter();
          }, 2000); // Wait 2 seconds before restarting
      }
  }

  typeWriter();


// Seleciona todos os cards
const cards = document.querySelectorAll('.box');

// Função para verificar se o elemento está visível na tela
function mostrarCards() {
    cards.forEach(card => {
        const posicao = card.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {
            card.classList.add('aparecer');
        }
    });
}

// Adiciona o evento de scroll
window.addEventListener('scroll', mostrarCards);

// Chama a função no início para ativar os cards já visíveis
mostrarCards();

// Seleciona o botão de hambúrguer e o menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu ul');

// Adiciona evento de clique no botão de hambúrguer
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna a classe 'active' no menu
    menuToggle.classList.toggle('active'); // Anima o botão de hambúrguer
});


// Sanitize input parameters dynamically (if needed)
const email = "matheuslucasdesouza22@gmail.com"; // Destinatário do email
const subject = encodeURIComponent("Assunto"); // Assunto do email
const body = encodeURIComponent("Mensagem inicial do email."); // Corpo do email

// Montar link seguro com parâmetros codificados
const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

// Aplicar o link ao botão dinamicamente
document.querySelector('.menu-contato a').href = gmailLink;
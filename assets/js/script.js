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
  const speed = 150; // Speed of typing

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



// Sanitize input parameters dynamically (if needed)
const email = "matheuslucasdesouza22@gmail.com"; // Destinatário do email
const subject = encodeURIComponent("Assunto"); // Assunto do email
const body = encodeURIComponent("Olá, vim pelo botão de email"); // Corpo do email

// Montar link seguro com parâmetros codificados
const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;



// Espera o DOM ser carregado antes de manipular os elementos
document.addEventListener("DOMContentLoaded", function() {
  // Seleciona o botão de menu (hambúrguer) e o menu
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu ul");
  const menuLinks = document.querySelectorAll(".menu ul li a"); // Todos os links do menu

  // Alterna a classe active para abrir ou fechar o menu
  menuToggle.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Fecha o menu ao clicar em qualquer link
  menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      menu.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
});



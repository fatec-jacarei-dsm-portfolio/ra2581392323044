$(document).ready(function () {

    var baseUrl = window.location.origin;
    var imageUrl = baseUrl + '/assets/images/lucasdwn.jpg';
    $('meta[property="og:image"]').attr('content', imageUrl);
    $('meta[name="twitter:image"]').attr('content', imageUrl);
    $('meta[name="image"]').attr('content', imageUrl);

    // Toggle para abrir e fechar a sidebar
    $("#sidebar-toggle").click(function () {
        $(".sidebar").toggleClass("open");

        // Altera o ícone de hamburger para o ícone de fechar
        if ($(".sidebar").hasClass("open")) {
            $(this).find("i").removeClass("fa-bars").addClass("fa-times"); // Ícone de fechar
        } else {
            $(this).find("i").removeClass("fa-times").addClass("fa-bars"); // Ícone de hamburger
        }
    });

    // Ao clicar em um link de navegação
    $(".nav-link").click(function () {
        let pageId = $(this).data("page");

        // Alterando o conteúdo
        $(".page").removeClass("active");
        $("#" + pageId).addClass("active");

        // Alterando o título da página dinamicamente
        let pageTitle = $(this).text(); // Pega o texto do link clicado
        document.title = pageTitle + " | Lucas Costa"; // Ajuste conforme desejar
        $('html, body').animate({ scrollTop: 0 }, 'slow');

        // Fechar a sidebar se estiver aberta (apenas para dispositivos móveis)
        if ($(window).width() <= 768) {
            $(".sidebar").removeClass("open");  // Fecha a sidebar
            $("#sidebar-toggle i").removeClass("fa-times").addClass("fa-bars"); // Restaura o ícone de hamburger
        }
    });

    function calcularIdade(dataNascimento) {
        let hoje = new Date();
        let nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        let mesAtual = hoje.getMonth();
        let mesNascimento = nascimento.getMonth();
        let diaAtual = hoje.getDate();
        let diaNascimento = nascimento.getDate();

        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }

        return idade;
    }

    let dataNascimento = "2003-04-08";
    $("#age").text(calcularIdade(dataNascimento));
});

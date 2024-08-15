$(document).ready(function () {
    $('#carolseu-imagens').slick({
        autoplay: true
    })

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle()
    })
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        $('html').animate({
            scrolltop: destino.offset().top
        }, 1000)
    })
})
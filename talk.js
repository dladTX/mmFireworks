$(function() {
    $('#yes').click(function(event) {
        modal('我就知道我家大宝贝一定会愿意的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('我喜欢你，不是一时兴起！', A);
    });
});

function A() {
    modal('我三观不正，很歪，全向着你。', B);
}

function B() {
    modal('你是我光想想都会偷着乐得人！', C);
}

function C() {
    modal('所有有你的选择，我都选你！', D);
}

function D() {
    modal('喜欢有很多种吧，无论是哪一种我都想给你。', E);
}

function E() {
    modal('我会毫不犹豫的奔向你，这次，每次，次次。', F);
}

function F() {
    modal('想和你在一起，今年，明年，年年。', G);
}

function G() {
    modal('我有很多个梦想，每个梦想里都有你。', H);
}

function H() {
    modal('想牵着你手，这样一直到永远。', I);
}

function I() {
    modal('比心。么么哒！', J)
}

function J() {
    modal('我想未来的每个瞬间都是和你！', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}

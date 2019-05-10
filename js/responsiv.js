$(function (){
   countStep = $('.form_wizard section .form_item').length;
   nbr_step = 0;
    $('.btn_nxt').click(function (){
        $(window).scrollTop(0);
        if(nbr_step < (countStep-1)){
            nbr_step = nbr_step + 1;
        }
        
        
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step - 1).removeClass('loading');
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step - 1).addClass('active');
        
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step).removeClass('disable');
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step).addClass('loading');
        
        $('.form_wizard section .form_item:visible').hide();
        $('.form_wizard section .form_item').eq(nbr_step).fadeIn(500);
    });
    
    $('.btn_pre').click(function (){
        $(window).scrollTop(0);
        if(nbr_step > 0){
            nbr_step = nbr_step - 1;
        }
        
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step + 1).removeClass('loading');
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step + 1).addClass('disable');
        
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step).removeClass('active');
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step).addClass('loading');
        
        $('.form_wizard section .form_item:visible').hide();
        $('.form_wizard section .form_item').eq(nbr_step).fadeIn(500);
    });
});
$(document).ready(function(){
    $('.buttons').click(function(){
        $(this).addClass('active').sblings().removeClass('active');
        var filter = $(this).atrr('data-filter')

        if(iflter == 'all'){
            $('.image').show(400);
        }else{
            $('.image').not('.'+filter).hide(200);
            $('.image').not('.'+filter).show(400);
        }
    });
});
$(function () {
    let now = 0;
    const slideCount = $('.slide ul li').length;
    const slideList = $('.slide ul');
    
    setInterval(function () {
        now = (now + 1) % slideCount
        slideList.css('left', 100 * -now + '%')
    }, 3000);
})

$(function () {
    const modal = $('#modal');
    const modalClose = $('#modal .modal-close');
    const noticeChild = $('.notice-container ul li:first-child');

    modal.css('display', 'none')

    noticeChild.on('click', function () {
        modal.css('display', 'flex')
    })
    modalClose.on('click', function () {
        modal.css('display', 'none')
    })
})
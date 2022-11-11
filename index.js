
    const displayText = document.getElementById('text');
    const displayEm = document.querySelector('.img-em');
    const displayAnh = document.querySelector('.img-anh');
    const displayTitle = document.querySelector('.title');
    const displayOn = document.querySelector('.on');
    const displayOff = document.querySelector('.off');
    const displayMatAnh = document.querySelector('.cheMat');
    const displayKhongMatAnh = document.querySelector('.khongChe');
    // const displayColor = document.querySelector('.color');
const handleClick = () => {
    
    displayText.style.display = 'block';
    displayEm.style.display = 'block';
    displayAnh.style.display = 'block';
    displayTitle.style.display = 'block';
    displayMatAnh.style.display = 'block';
    displayOn.style.color = '#44bd32';
    displayOff.style.color = '#f5f6fa';
    displayLove.style.display ='block';
    displayNoLove.style.display ='none';
    // if(displayAnh.classList.contains('img-anh')) {
    //     displayAnh.classList.remove('img-anh')
    // }
 
}
const handleClickOff = () => {
    
    // const displayText = document.getElementById('text');
    // const displayEm = document.querySelector('.img-em');
    // const displayAnh = document.querySelector('.img-anh');
    // const displayTitle = document.querySelector('.title');
    displayText.style.display = 'none';
    displayEm.style.display = 'none';
    displayAnh.style.display = 'none';
    displayTitle.style.display = 'none';
    displayOn.style.color = '#f5f6fa';
    displayOff.style.color = '#718093';
    displayMatAnh.style.display ='none';
    displayKhongMatAnh.style.display ='none';
    displayLove.style.display ='none';
    displayNoLove.style.display ='none';
    // if(displayAnh.classList.contains('img-anh')) {
    //     displayAnh.classList.remove('img-anh')
    // }
 
}
const handleClickOffImage = () => {
    displayAnh.style.background = 'red';
    displayMatAnh.style.display ='none';
    displayKhongMatAnh.style.display ='block';
    displayAnh.style.opacity ='0.05';
}
const handleClickOnImage = () => {
    displayMatAnh.style.display ='block';
    displayKhongMatAnh.style.display ='none';
    displayAnh.style.opacity ='1';
}


const displayLove = document.querySelector('.love');
const displayNoLove = document.querySelector('.noLove');
const handleLove = () => {
    displayNoLove.style.display ='block';
    displayLove.style.display ='none';
    displayText.innerHTML = 'Quá là xinh';
}
const handleNoLove = () => {
    displayNoLove.style.display ='none';
    displayLove.style.display ='block';
    displayText.innerHTML = 'Quá là dễ thương';
}
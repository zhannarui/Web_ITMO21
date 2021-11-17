document.querySelectorAll('.aboutMe__galery img').forEach(image =>{
image.onclick = () =>{
    document.querySelector('.popup-img').style.display = 'block';
    document.querySelector('.popup-img img').src = image.getAttribute('src')
}
});

document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none';
}

document.querySelectorAll('.portfolio__content-img img').forEach(image1 =>{
    image1.onclick = () =>{
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image1.getAttribute('src')
    }
    });
    
    document.querySelector('.popup-img span').onclick = () =>{
        document.querySelector('.popup-img').style.display = 'none';
    }
    

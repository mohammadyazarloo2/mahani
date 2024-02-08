let input=document.querySelector('.search-bar-input');

input.addEventListener('click',function(){
    this.parentElement.querySelector('.label').classList.add('make-top')
})
input.addEventListener('blur',function(){
    this.parentElement.querySelector('.label').classList.remove('make-top')
})
const colors=[
    'red',
    'yellow',
    'blue',
    'green',
    'purple',
    'orange',
    'indigo',
    'violet',
    
];
//onst firstB = document.querySelector('#first')
const changeColor = function(){
    const box11=document.querySelector('#first')
    //const div=document.createElement('div')
    box11.style.backgroundColor = this.style.backgroundColor;
    //const h2=document.querySelector('h2')
    //h2.style.color = this.style.backgroundColor;
    console.log(this.style.backgroundColor)
}
const boxes = document.querySelector('#boxes')
for(let color of colors){
    const box =document.createElement('div');
box.style.backgroundColor=color;
box.classList.add('box');
boxes.appendChild(box);
box.addEventListener('click',changeColor)

}
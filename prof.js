let buttons=document.getElementsByTagName('button');
let question=[];
let div1=document.querySelector('#div1');
let div2=document.querySelector('#div2');
let div3=document.querySelector('#div3');
let submit=document.querySelector('#submit');
let submitForm=document.querySelector('#submitForm');
function addHidden(event){
    event.classList.add('hidden');
}
function removeHidden(event){
    event.classList.remove('hidden');
}

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',
    function clickButton(event){
        event.preventDefault();
        if(buttons[i].classList==''+i+''){
            if(i==0||i==1){
                addHidden(div1);
                question.push(i);
                removeHidden(div2);
            }
            else if(i==2||i==3){
                addHidden(div2);
                 question.push(i);
                removeHidden(div3);
            }
             else if(i==4||i==5){
                addHidden(div3);
                 question.push(i);
                removeHidden(div4);
             }
             else if(i==6||i==7){
                addHidden(div4);
                question.push(i);
               removeHidden(div5);
             } else if(i==8||i==9){
                addHidden(div5);
                question.push(i);
               removeHidden(div6);
             } else if(i==10||i==11){
                addHidden(div6);
                question.push(i);
               removeHidden(div7);
             } else if(i==12||i==13){
                addHidden(div7);
                question.push(i);
               removeHidden(div8);
             }
             else if(i==14||i==15){
                addHidden(div8);
                question.push(i);
               removeHidden(div9);
             }
             else if(i==16||i==17){
                addHidden(div9);
                removeHidden(submit);
                question.push(i);
             }
             
        }
    });
}
submitForm.addEventListener('submit',function(event){
    event.preventDefault();
    addHidden(submit);
    alert("Вы нажали на "+question[0]+" и "+question[1]+"кнопки");
});
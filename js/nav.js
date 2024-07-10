const navBtn=(btnId)=>{
    const id=['li1', 'li2', 'li3', 'li4', 'li5']
    id.forEach(li=>(li===btnId)?document.getElementById(li).style.color='#3F51F3':document.getElementById(li).style.color='black');
}
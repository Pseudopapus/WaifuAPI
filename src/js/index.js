console.log("inicio");
let total = 1;
let group = 1;
let main = document.querySelector('main');
fetch('./src/data/data.json')
.then(response => {return response.json()})
.then(data => {
  data.src.forEach(e=>{
    let section = document.createElement("section");
    section.innerHTML+=`<h3>${e.name}</h3>`;
    main.appendChild(section);
    e.waifus.forEach(w=>{
      if(w.id){
        section.innerHTML +=/*html*/`
        <div class="w c${(w.id==null ? "" : group)}">
          ${total} ${w.name.nick}
        </div>`;
        total+=1;
      }
    })
    group=(group>=7 ? 1 : (e.id ? group+1 : 0));
  })
})
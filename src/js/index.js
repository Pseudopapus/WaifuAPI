console.log("inicio");
let total = 1;
let group = 1;
let main = document.querySelector('main');
fetch('./src/data/data.json')
.then(response => {return response.json()})
.then(data => {
  data.src.forEach(e=>{
    let section = document.createElement("section");
    section.innerHTML+=`<h2>${e.name}</h2>`;
    main.appendChild(section);
    e.waifus.forEach(w=>{
      if(w.id){
        section.innerHTML +=/*html*/`
        <article class="w c${(w.id==null ? "" : group)}">
          <div class="w-img">
            <div class="name">
              <h4 class="center">${w.name.nick}</h4>
              <h5 class="center">${total}</h5>
            </div>
            ${w.name.jap ? `<div class="jap"><h4 class="center">${w.name.jap}</h4></div>` : ""}
          </div>
        </article>`;
        total+=1;
      }
    })
    group=(group>=6 ? 1 : (e.id ? group+1 : 0));
  })
})
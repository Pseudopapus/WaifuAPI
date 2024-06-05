console.log("inicio");
let total = 1;
let group = 1;
fetch('./src/data/data.json')
.then(response => {return response.json()})
.then(data => {
  data.src.forEach(e=>{
      e.waifus.forEach(w=>{
        document.body.innerHTML +=/*html*/`
        <div class="w c${(w.id==null ? "" : group)}">
          ${total} ${w.name.nick}
        </div>`;
        total+=1;
      })
      group+=(e.id ? 1 : 0);
      group=(group>=7 ? 1 : group);
  })
})
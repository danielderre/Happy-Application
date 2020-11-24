const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //insert data in table
  await saveOrphanage(db, {
    lat: "-22.9008973",
    lng: "-43.3452445",
    name: "Lar das meninas",
    about: "Presta assistência a criaças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    whatsapp: "21369283821",
    images: ["https://images.unsplash.com/photo-1570570423586-370eee6c19b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    "https://images.unsplash.com/photo-1601725591042-d657de65a47b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"],
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas das 08:00 as 18:00",
    open_on_weekends: "1"
  }); 
   
  //consult table data
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages); 

  //consult one orphanage by id
  const orphanages = await db.all('SELECT * FROM orphanages WHERE id ="2"');
  console.log(orphanages);
/*

  //delete table data
console.log(await db.run('DELETE FROM orphanages WHERE id="4"'))
console.log(await db.run('DELETE FROM orphanages WHERE id="5"'))*/
});

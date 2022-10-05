var today = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var now = today.toLocaleString('ru-RU', options);


const documentElements = {

   header: "",
   body: "",
   footer: "",
   date: "",
   app: {
      header: { appHeader: "" },
      body: { appBody: "" },
      footer: { appFooter: "" },
      date: { appDate: now },
   },
   /* Функция перебирает все элементы объекта кроме "app" и на дате задает значение "now" 
   не смотря на промпт и на дате останавливает перебирать объект*/
   showDocument: () => {
      for (let promT in documentElements) {
         if (promT !== "app") {
            documentElements[promT] = prompt("Enter your : " + promT)
         }
         if (promT == "date") {
            documentElements.date = now;
            break;
         }
      };
      document.getElementById("div").innerHTML = `Yout Header : ${documentElements.header} <br>
      Your Body : ${documentElements.body}<br>
      Your Footer :  ${documentElements.footer}<br> 
      Date : ${documentElements.date} <hr>`;
   },

   showDocumentApp: () => {
      for (let prom in documentElements.app.header) {
         documentElements.app.header[prom] = prompt("Enter your : " + prom)
      };
      for (let prom in documentElements.app.body) {
         documentElements.app.body[prom] = prompt("Enter your : " + prom)
      };
      for (let prom in documentElements.app.footer) {
         documentElements.app.footer[prom] = prompt("Enter your : " + prom)
      };
      document.getElementById("pp").innerHTML = `Application name : ${documentElements.app.header.appHeader} <br>
      Application body : ${documentElements.app.body.appBody}<br>
      Application footer : ${documentElements.app.footer.appFooter}<br>
      Application date : ${documentElements.app.date.appDate}`
   }
};

documentElements.showDocumentApp();
documentElements.showDocument();











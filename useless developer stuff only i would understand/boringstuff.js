const arrayColor = ["#add8e6", "#87cefa", "#b0c4de", "#ffa07a"];

var pointOnArrayColor = 0;

const data = JSON.parse('[ {"id": "1", "name": "google",  "url": "www.google.com","subData": [{"id": "2","name": "walla","url": "www.walla.co.il"}, { "id": "3","name": "ynet", "url": "www.ynet.co.il", "subData": [{"id": "4",  "name": "mako","url": "www.mako.co.il"}, { "id": "5", "name": "google","url": "www.google.com" },{ "id": "6", "name": "walla",  "url": "www.walla.co.il"}] },{"id": "7","name": "google","url": "www.google.com"}] }, {"id": "8", "name": "ynet","url": "www.ynet.co.il","subData": [ { "id": "9", "name": "walla","url": "www.walla.co.il" },{"id": "10", "name": "google", "url": "www.google.com","subData": [{"id": "11", "name": "ynet", "url": "www.ynet.co.il", "subData": [{ "id": "12", "name": "walla",  "url": "www.walla.co.il"   }, { "id": "13", "name": "google", "url": "www.google.com" }, {"id": "14","name": "mako", "url": "www.mako.co.il" } ] }, {  "id": "15", "name": "google", "url": "www.google.com" },{ "id": "16", "name": "mako", "url": "www.mako.co.il" }  ]}, { "id": "17", "name": "walla", "url": "www.walla.co.il", "subData": [{ "id": "18", "name": "ynet", "url": "www.ynet.co.il"  }, { "id": "19",  "name": "google", "url": "www.google.com" }, { "id": "20", "name": "walla", "url": "www.walla.co.il" } ] },{"id": "21", "name": "mako", "url": "www.mako.co.il" } ]}]  ');

const container = document.createElement('div')//main DIV
container.style.display = 'inline'
container.style.gap = '1em'

const render = obj => {
    const div = document.createElement('div')
    const nameSpan = document.createElement('span');
    const idSpan = document.createElement('span');
    const urlSite = document.createElement('a');
    idSpan.textContent = "Id:" + obj.id;
    nameSpan.textContent = "Site Name:" + obj.name;
    urlSite.textContent = "Site Url:" + obj.name;
    urlSite.href="https://"+obj.url;
    urlSite.target = "blank";
    div.appendChild(idSpan)
    div.appendChild(nameSpan)
    div.appendChild(urlSite);
    //style ==>
    {
    div.style.flexDirection = 'column'
    div.style.border = '3px solid green'
    div.style.borderRadius = '20px'
    div.style.padding = '10px'
    div.style.display = "flex";
    div.style.margin = "5px";
    //div.style.width = "25%";
    div.setAttribute("id", obj.id);
    div.style.backgroundColor = arrayColor[pointOnArrayColor];
    }
    if (obj.id == 8) { div.style.cssFloat = "right"; }//כנל
    if (obj.id == 1) { div.style.cssFloat = "right";}//מתעסק באלמנט ספציפי שמזהה שלו 1
    if (pointOnArrayColor > arrayColor.length) { pointOnArrayColor = 0; }//כנ"ל
    if (obj.subData) {
        pointOnArrayColor++;
        const childrenContainer = document.createElement('div')
        const childrenContainerSpan = document.createElement('span')

        //childrenContainerSpan.textContent = 'Sub Data: '
        childrenContainer.appendChild(childrenContainerSpan);
        //style
        {
        childrenContainer.style.display = 'inline'
        childrenContainer.style.gap = '1em'
        }
        obj.subData.forEach(e => childrenContainer.appendChild(render(e)))

        div.appendChild(childrenContainer)
        pointOnArrayColor--;
        
    }

    return div
}

data.forEach(e => container.appendChild(render(e)))

window.onload = () => {
    document.body.appendChild(container)
}







let links = [
    {
        "pageName": "Home",
        "URL": "index.html"
    },
    {
        "pageName": "Variables",
        "URL": "variables.html"
    },
    {
        "pageName": "If Statements",
        "URL": "ifstatements.html"
    },
    {
        "pageName": "While Loops",
        "URL": "loops.html"
    },
    {
        "pageName": "For Loops",
        "URL": "ForLoops.html"
    }
];





var mylist = document.createElement('ul');

let txt = "";
for(var i of links){
    var atag = document.createElement('a');
    atag.setAttribute("href", i.URL);
    atag.textContent = i.pageName;
    var liElementp = document.createElement('li');
    liElementp.appendChild(atag);
    mylist.appendChild(liElementp);
  
}


document.getElementById("nav").appendChild(mylist);

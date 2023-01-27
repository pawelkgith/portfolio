function plansza()
{
    let table = document.createElement("table");

    document.querySelector("#plansza").appendChild(table);

    let id = 1;

    for(let i = 1; i < 4; i++)
    {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for(let j = 1; j < 4; j++)
        {
            var td = document.createElement("td");
            tr.appendChild(td);
            td.setAttribute("id", "pole" + id);
            td.setAttribute("class", "pola");
            id++;
        }
    }
}

plansza();

let ruch = 0;

for(let i=1; i<10; i++)
{
    document.querySelector("#pole" + i).onclick=function()
    {
        let pole1 = document.querySelector("#pole1");
        let pole2 = document.querySelector("#pole2");
        let pole3 = document.querySelector("#pole3");
        let pole4 = document.querySelector("#pole4");
        let pole5 = document.querySelector("#pole5");
        let pole6 = document.querySelector("#pole6");
        let pole7 = document.querySelector("#pole7");
        let pole8 = document.querySelector("#pole8");
        let pole9 = document.querySelector("#pole9");

        if(ruch == 0)
        {
            document.querySelector("#pole" + i).innerHTML="X";
            document.querySelector("#pole" + i).setAttribute("class", "krzyzyk");
            ruch=1;
        }

        else if(ruch==1)
        {
            document.querySelector("#pole" + i).innerHTML="O";
            document.querySelector("#pole" + i).setAttribute("class", "kolko");
            ruch=0;
        }

        if((pole1.classList.contains("krzyzyk") && pole2.classList.contains("krzyzyk") && pole3.classList.contains("krzyzyk")))
        {
            alert("gracz 1 wygral");
        }

        if((pole1.classList.contains("krzyzyk") && pole4.classList.contains("krzyzyk") && pole7.classList.contains("krzyzyk")) || (pole4.classList.contains("krzyzyk") && pole5.classList.contains("krzyzyk") && pole6.classList.contains("krzyzyk")) || (pole7.classList.contains("krzyzyk") && pole8.classList.contains("krzyzyk") && pole9.classList.contains("krzyzyk")) || (pole1.classList.contains("krzyzyk") && pole5.classList.contains("krzyzyk") && pole9.classList.contains("krzyzyk")) || (pole3.classList.contains("krzyzyk") && pole5.classList.contains("krzyzyk") && pole7.classList.contains("krzyzyk")) || (pole2.classList.contains("krzyzyk") && pole5.classList.contains("krzyzyk") && pole8.classList.contains("krzyzyk")) || (pole3.classList.contains("krzyzyk") && pole6.classList.contains("krzyzyk") && pole9.classList.contains("krzyzyk")))
        {
            alert("gracz 1 wygral");
        }

        if((pole1.classList.contains("kolko") && pole2.classList.contains("kolko") && pole3.classList.contains("kolko")))
        {
            alert("gracz 2 wygral");
        }

        if((pole1.classList.contains("kolko") && pole4.classList.contains("kolko") && pole7.classList.contains("kolko")) || (pole4.classList.contains("kolko") && pole5.classList.contains("kolko") && pole6.classList.contains("kolko")) || (pole7.classList.contains("kolko") && pole8.classList.contains("kolko") && pole9.classList.contains("kolko")) || (pole1.classList.contains("kolko") && pole5.classList.contains("kolko") && pole9.classList.contains("kolko")) || (pole3.classList.contains("kolko") && pole5.classList.contains("kolko") && pole7.classList.contains("kolko")) || (pole2.classList.contains("kolko") && pole5.classList.contains("kolko") && pole8.classList.contains("kolko")) || (pole3.classList.contains("kolko") && pole6.classList.contains("kolko") && pole9.classList.contains("kolko")))
        {
            alert("gracz 2 wygral");
        }
    }

    document.querySelector("#pole" + i).addEventListener("contextmenu", e => {
        e.preventDefault();
        document.querySelector("#pole" + i).style.cssText="background-color: red;";
    });
}




let langs = document.querySelector(".langs"),
link = document.querySelectorAll("a"),
title = document.querySelector(".title"),
descr = document.querySelector(".desc"),
foot = document.querySelector(".foot");

link.forEach(el=>{
el.addEventListener("click", ()=>{
     langs.querySelector(".active").classList.remove("active");
     el.classList.add("active");

     let attr = el.getAttribute("language")

     title.textContent = data[attr].title
     descr.textContent = data[attr].desc
     foot.textContent = data[attr].foot
})
})

let data = {
english: {
     title: "Exelence in design",
     desc: "Grandma says my designs are the best ones.",
     foot: "2022. All rights reserved."
},
german: {
     title: "Exzellenz im Design",
     desc: "Grossmutter sagt, dass meine Design die besten sind.",
     foot: "2022. Alle Rechte vorbehalten."
},
spanish: {
     title: "Excelencia en diseño",
     desc: 'Mi abuelita dice que mis diseños son los mejores.',
     foot: "2022. Todos los derechos reservados."
}
}
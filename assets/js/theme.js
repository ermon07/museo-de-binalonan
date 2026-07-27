const themeToggle = document.getElementById("theme-toggle");

const body = document.body;


function setTheme(theme){

    body.classList.toggle(
        "dark-mode",
        theme === "dark"
    );


    if(themeToggle){

        themeToggle.innerHTML = 
            theme === "dark"
            ? '<i class="bi bi-sun-fill"></i>'
            : '<i class="bi bi-moon-fill"></i>';

    }


    localStorage.setItem(
        "theme",
        theme
    );

}



const savedTheme = localStorage.getItem("theme");


setTheme(savedTheme || "light");



if(themeToggle){

    themeToggle.addEventListener("click",()=>{


        const newTheme = 
            body.classList.contains("dark-mode")
            ? "light"
            : "dark";


        setTheme(newTheme);


    });

}
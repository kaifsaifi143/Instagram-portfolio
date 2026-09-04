// ==========================================
// INSTAGRAM PORTFOLIO JAVASCRIPT
// Basic JavaScript only
// ==========================================


// ==========================================
// 1. FOLLOW BUTTON
// ==========================================

// querySelector() HTML ke andar element ko select karta hai.

const followBtn =
    document.querySelector("#followBtn");


followBtn.addEventListener("click", function () {

    /*
       classList.toggle():

       Agar class nahi hai -> add karega
       Agar class hai -> remove karega
    */

    followBtn.classList.toggle("following");


    /*
       classList.contains() check karta hai
       ki element ke andar "following" class hai
       ya nahi.
    */

    if (followBtn.classList.contains("following")) {

        followBtn.textContent = "Following";

    } else {

        followBtn.textContent = "Follow";

    }

});



// ==========================================
// 2. LIKE BUTTON
// ==========================================


/*
   querySelectorAll() ek se zyada elements
   ko select karta hai.

   Hamare page par 6 like buttons hain.
*/

const likeButtons =
    document.querySelectorAll(".likeBtn");


/*
   forEach() har selected button par
   same code run karta hai.
*/

likeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("liked");


        if (
            button.classList.contains("liked")
        ) {

            button.textContent = "♥";

        } else {

            button.textContent = "♡";

        }

    });

});



// ==========================================
// 3. PROJECT FILTER
// ==========================================


const projectFilter =
    document.querySelector("#projectFilter");


const projectCards =
    document.querySelectorAll(".project-card");


projectFilter.addEventListener(
    "change",
    function () {

        /*
           Select box se jo value select hui
           usko yaha store kar rahe hain.
        */

        const selectedCategory =
            projectFilter.value;


        projectCards.forEach(function (card) {

            /*
               dataset.category

               HTML me humne likha:

               data-category="html"

               JavaScript me ise:

               card.dataset.category

               se access kar sakte hain.
            */

            const cardCategory =
                card.dataset.category;


            /*
               Agar "all" select hai
               ya category match karti hai,
               project show hoga.
            */

            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    }
);



// ==========================================
// 4. MESSAGE MODAL
// ==========================================


const messageBtn =
    document.querySelector("#messageBtn");


const messageModal =
    document.querySelector("#messageModal");


const closeModal =
    document.querySelector("#closeModal");


/*
   Message button click hone par
   modal open hoga.
*/

messageBtn.addEventListener(
    "click",
    function () {

        messageModal.classList.add("show");

    }
);



// Close button

closeModal.addEventListener(
    "click",
    function () {

        messageModal.classList.remove("show");

    }
);



// ==========================================
// 5. MODAL BACKGROUND CLICK
// ==========================================


/*
   Agar user popup ke bahar dark area
   par click karega to modal close hoga.
*/

messageModal.addEventListener(
    "click",
    function (event) {

        /*
           event.target batata hai ki
           actual click kis element par hua.
        */

        if (event.target === messageModal) {

            messageModal.classList.remove("show");

        }

    }
);



// ==========================================
// 6. MESSAGE FORM
// ==========================================


const sendBtn =
    document.querySelector("#sendBtn");


const nameInput =
    document.querySelector("#nameInput");


const messageInput =
    document.querySelector("#messageInput");


const result =
    document.querySelector("#result");


sendBtn.addEventListener(
    "click",
    function () {

        /*
           .value input ke andar likhi hui
           value ko read karta hai.
        */

        const name =
            nameInput.value.trim();


        const message =
            messageInput.value.trim();


        /*
           trim() extra spaces ko remove karta hai.
        */

        if (name === "" || message === "") {

            result.textContent =
                "Please fill all fields.";

            return;

        }


        result.textContent =
            "Message submitted successfully! ✓";


        nameInput.value = "";

        messageInput.value = "";

    }
);



// ==========================================
// 7. DARK MODE
// ==========================================


const themeBtn =
    document.querySelector("#themeBtn");


themeBtn.addEventListener(
    "click",
    function () {

        /*
           Body ke andar "dark" class
           add/remove hogi.

           CSS me humne body.dark ke
           rules already bana rakhe hain.
        */

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            themeBtn.textContent = "☀️";

        } else {

            themeBtn.textContent = "🌙";

        }

    }
);



// ==========================================
// 8. ESC KEY
// ==========================================


/*
   Keyboard ki koi key press hone par
   ye function chalega.
*/

document.addEventListener(
    "keydown",
    function (event) {

        /*
           Agar Escape key press hui
           to modal close kar do.
        */

        if (event.key === "Escape") {

            messageModal.classList.remove("show");

        }

    }
);

    const cursor = document.querySelector(".cursor");
    const outline = document.querySelector(".cursorOutline");

    window.addEventListener("mousemove", 
    function(e){
        const posX = e.clientX;
        const posY = e.clientY;

        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`;

        //outline.style.left = `${posX}px`;
        //outline.style.top = `${posY}px`;

        outline.animate({
            top: `${posY}px`,
            left: `${posX}px`
        }, {duration: 3000, fill: "forwards"})
    }
    )
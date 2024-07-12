function myFunc() {
    let heading = document.querySelectorAll(".but");
    let head = document.querySelector("#header");
    if (window.innerWidth <= 540) {
        // head.style.height = "50px";
        head.style.border = '2px solid black';
    }


    let bio = document.querySelectorAll(".bio");
    bio.forEach((hbio) => {
        if (window.innerWidth <= 540) {
            hbio.style.fontSize = '1em';
            hbio.style.margin = '-0.2em';
        }
        else {
            hbio.style.fontSize = '1';
            hbio.style.margin = '';
        }
    })


    let about = document.querySelectorAll('.about');
    about.forEach(ab => {
        if (window.innerWidth <= 540) {
            ab.style.fontSize = '1.1em';
            ab.style.paddingLeft = '10px';
            ab.style.paddingRight = '10px';

        }
        else {
            ab.style.fontSize = '';
            ab.style.paddingLeft = '';
            ab.style.paddingRight = '';
        }

    })


    heading.forEach((h) => {
        if (window.innerWidth <= 540) {
            h.style.height = '30px';
            h.style.fontSize = '0.7em';
            // h.style.textAlign = 'start';
            h.style.display = 'flex';
            h.style.alignItems = 'center';
            h.style.marginTop = '-10px';
            h.style.fontWeight = "500";
        }
        else {
            h.style.height = '';
            h.style.fontSize = '';
            h.style.display = '';
            h.style.alignItems = '';
            h.style.marginTop = '';
            h.style.fontWeight = "";
        }
    })
}





function showAbout() {
    window.location.href = 'about.html';
    // document.getElementById('aboutToHome').addEventListener('click', () => {
    //     window.history.back = 'index.html';
    // });
}
document.getElementById('abt').addEventListener('click', () => {
    showAbout();
})

function showProject() {
    window.location.href = 'project.html';
    // document.getElementById('projectToHome').addEventListener('click', () => {
    //     window.history.back() = 'index.html';
    // })
}
document.getElementById('proj').addEventListener('click', () => {
    showProject();
})

function showContact() {
    window.location.href = 'contact.html';
    // document.getElementById('contactToHome').addEventListener('click', () => {
    //     window.location.href = 'index.html';
    // })
}
document.getElementById('contacts').addEventListener('click', () => {
    showContact();
})





// function showAbout() {
//     document.querySelectorAll('.common').forEach(section => {
//         section.style.display = 'none';
//     })
//     document.getElementById('aboutme').style.display = 'block';

//     document.getElementById('aboutToHome').addEventListener('click', () => {
//         window.location.href = 'index.html';
//     })

// }

// document.getElementById('abt').addEventListener('click', () => {
//     showAbout();
// })








window.addEventListener("load", myFunc);
window.addEventListener("resize", myFunc);

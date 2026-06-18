gsap.registerPlugin(SplitText);

const latasMenores = document.querySelectorAll(".latas img:nth-child(2)");

const slides = document.querySelectorAll(".slide");

let = contador = 0

let clicar = true

latasMenores.forEach(LataMenor => {
    LataMenor.onclick = () => {

        if(clicar) {
            clicar = false

            const slideAtivo = document.querySelector(".slide.ativo");
            slideAtivo.classList.remove("ativo");

            if (contador == 3) {
                contador = 0
            } else {
                contador = contador + 1
            }

            slides[contador].classList.add("ativo");

            animarTitulo();
        
            setTimeout(()=> {
                clicar = true
            }, 1000)
        }
    };
});

function animarTitulo() {
    const split = SplitText.create(".slide.ativo h2", {
    type: "chars",
    mask: "chars"
});

gsap.from(split.chars, {
    y: "100%",
    duration: 0.5,
    stagger: 0.06,
    delay: .5
});
}



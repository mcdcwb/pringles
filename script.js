gsap.registerPlugin(SplitText);

const latasMenores = document.querySelectorAll(".latas img:nth-child(2)");
const slides = document.querySelectorAll(".slide");
const setasEsquerda = document.querySelectorAll(".seta-esquerda");
const setasDireita = document.querySelectorAll(".seta-direita");

let contador = 0;
let clicar = true;

function mudarSlide(direcao) {
    if (clicar) {
        clicar = false;

        const slideAtivo = document.querySelector(".slide.ativo");
        slideAtivo.classList.remove("ativo");

        if (direcao === "proximo") {
            if (contador == 3) {
                contador = 0;
            } else {
                contador = contador + 1;
            }
        } else if (direcao === "anterior") {
            if (contador == 0) {
                contador = 3;
            } else {
                contador = contador - 1;
            }
        }

        slides[contador].classList.add("ativo");

        animarTitulo();

        setTimeout(() => {
            clicar = true;
        }, 1000);
    }
}

latasMenores.forEach(LataMenor => {
    LataMenor.onclick = () => {
        mudarSlide("proximo");
    };
});

setasEsquerda.forEach(seta => {
    seta.onclick = () => {
        mudarSlide("anterior");
    };
});

setasDireita.forEach(seta => {
    seta.onclick = () => {
        mudarSlide("proximo");
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

gsap.registerPlugin(ScrollTrigger);


gsap.to(".texto-faixa", {
    xPercent: -30,
    ease: "none",
    scrollTrigger: {
        trigger: ".segunda-secao",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});


gsap.to(".linha-branca-container", {
    x: -80,
    rotation: 5,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".segunda-secao",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});


gsap.to(".lata-1", {
    y: 60,
    rotation: 15,
    scrollTrigger: {
        trigger: ".segunda-secao",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.8
    }
});

gsap.to(".lata-2", {
    y: 70,
    rotation: -15,
    scrollTrigger: {
        trigger: ".segunda-secao",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2
    }
});

gsap.to(".lata-3", {
    y: 50,
    rotation: 12,
    scrollTrigger: {
        trigger: ".segunda-secao",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
    }
});

gsap.to(".lata-4", {
    y: 60,
    rotation: -13,
    scrollTrigger: {
        trigger: ".segunda-secao",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
    }
});
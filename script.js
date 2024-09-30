//Smooth scroll
document.querySelector('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(thisgetAtribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adiciona a classe 'visible' quando estiver na tela
            }
        });
    }, {
        threshold: 0.5
    });

    skills.forEach(skill => {
        observer.observe(skill);
    });
});

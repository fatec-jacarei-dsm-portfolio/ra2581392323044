$(document).ready(function () {

    $.getJSON('assets/json-projetos/abp.json', function (data) {
        data.forEach(function (project) {
            const projectCard = `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <div class="project-header">
                        <h4 class="project-title">${project.title}</h4>
                        <span class="project-period">${project.period}</span>
                    </div>
                    <p class="project-course">${project.course}</p> <!-- Semestre adicionado aqui -->
                    <p class="project-description">${project.description}</p>
                    <div class="project-links">
                        ${project.links.map(link => `<a href="${link.url}" target="_blank"><i class="${link.icon}"></i></a>`).join('')}
                    </div>
                </div>
            </div>
            `;
    
            // Adiciona o card ao container
            $('#projects-abp').append(projectCard);
        });
    });

    $.getJSON('assets/json-projetos/atividades.json', function (data) {
        data.forEach(function (project) {
            const projectCard = `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <div class="project-header">
                        <h4 class="project-title">${project.title}</h4>
                        <span class="project-period">${project.period}</span>
                    </div>
                    <p class="project-course">${project.course}</p> <!-- Semestre adicionado aqui -->
                    <p class="project-description">${project.description}</p>
                    <div class="project-links">
                        ${project.links.map(link => `<a href="${link.url}" target="_blank"><i class="${link.icon}"></i></a>`).join('')}
                    </div>
                </div>
            </div>
            `;
    
            // Adiciona o card ao container
            $('#projects-atividades').append(projectCard);
        });
    });

    $.getJSON('assets/json-projetos/pessoais.json', function (data) {
        data.forEach(function (project) {
            const projectCard = `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <div class="project-header">
                        <h4 class="project-title">${project.title}</h4>
                        <span class="project-period">${project.period}</span>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-links">
                        ${project.links.map(link => `<a href="${link.url}" target="_blank"><i class="${link.icon}"></i></a>`).join('')}
                    </div>
                </div>
            </div>
            `;
    
            // Adiciona o card ao container
            $('#projects-pessoais').append(projectCard);
        });
    });

    $.getJSON('assets/json-projetos/publicacoes.json', function (data) {
        data.forEach(function (project) {
            const projectCard = `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <div class="project-header">
                        <h4 class="project-title">${project.title}</h4>
                        <span class="project-period">${project.period}</span>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-links">
                        ${project.links.map(link => `<a href="${link.url}" target="_blank"><i class="${link.icon}"></i></a>`).join('')}
                    </div>
                </div>
            </div>
            `;
    
            // Adiciona o card ao container
            $('#projects-publicacoes').append(projectCard);
        });
    });


});

// Registrar materias
const materias = [
    // --- 1er Semestre ---
    {id:"TCDS-001", nombre:"Introducción a las ciencias sociales", req:[], area:"TCDS", sem:1},
    {id:"TCDS-002", nombre:"Taller de técnicas de expresión oral y escrita", req:[], area:"TCDS", sem:1},
    {id:"TCDS-003", nombre:"Derechos humanos, cultura y democracia", req:[], area:"TCDS", sem:1},
    {id:"LDES-002", nombre:"Introducción al derecho", req:[], area:"LDES", sem:1},
    {id:"LDES-004", nombre:"Historia del derecho", req:[], area:"LDES", sem:1},
    {id:"FGUS-002", nombre:"Desarrollo del pensamiento complejo", req:[], area:"FGUS", sem:1},
    {id:"FGUS-004", nombre:"Lengua extranjera I", req:[], area:"FGUS", sem:1},

    // --- 2do ---
    {id:"TCDS-005", nombre:"Métodos de investigación", req:[], area:"TCDS", sem:2},
    {id:"LDES-008", nombre:"Derecho romano", req:[], area:"LDES", sem:2},
    {id:"TCDS-004", nombre:"Protección de datos personales", req:[], area:"TCDS", sem:2},
    {id:"LDES-007", nombre:"Personas y familia", req:["LDES-002"], area:"LDES", sem:2},
    {id:"FGUS-001", nombre:"Formación humana y social", req:[], area:"FGUS", sem:2},
    {id:"LDES-006", nombre:"Teorías del estado", req:[], area:"LDES", sem:2},
    {id:"FGUS-005", nombre:"Lengua extranjera II", req:["FGUS-004"], area:"FGUS", sem:2},

    // --- 3ro ---
    {id:"LDES-253", nombre:"Relaciones individuales de trabajo", req:[], area:"LDES", sem:3},
    {id:"LDES-251", nombre:"Dogmática penal (general)", req:["LDES-008"], area:"LDES", sem:3},
    {id:"LDES-252", nombre:"Bienes y sucesiones", req:["LDES-007"], area:"LDES", sem:3},
    {id:"LDES-254", nombre:"Teoría general del derecho", req:["LDES-002"], area:"LDES", sem:3},
    {id:"LDES-009", nombre:"Teoría de la constitución", req:["LDES-006"], area:"LDES", sem:3},
    {id:"LDES-010", nombre:"Sistemas jurídicos contemporáneos", req:["LDES-006"], area:"LDES", sem:3},
    {id:"FGUS-006", nombre:"Lengua extranjera III", req:["FGUS-005"], area:"FGUS", sem:3},

    // --- 4to ---
    {id:"LDES-011", nombre:"Teoría del proceso", req:["TCDS-001"], area:"LDES", sem:4},
    {id:"LDES-263", nombre:"Relaciones colectivas del trabajo", req:["LDES-253"], area:"LDES", sem:4},
    {id:"LDES-255", nombre:"Dogmática penal (especial)", req:["LDES-251"], area:"LDES", sem:4},
    {id:"LDES-256", nombre:"Obligaciones", req:["LDES-252"], area:"LDES", sem:4},
    {id:"LDES-283", nombre:"Filosofía del derecho", req:["LDES-254"], area:"LDES", sem:4},
    {id:"TCDS-006", nombre:"Sistema constitucional mexicano", req:["LDES-009"], area:"TCDS", sem:4},
    {id:"FGUS-007", nombre:"Lengua extranjera IV", req:["FGUS-006"], area:"FGUS", sem:4},

    // --- 5to ---
    {id:"LDES-264", nombre:"Procesal del trabajo", req:["LDES-263"], area:"LDES", sem:5},
    {id:"LDES-266", nombre:"Derecho agrario", req:["LDES-263"], area:"LDES", sem:5},
    {id:"LDES-269", nombre:"Procesal penal", req:["LDES-255","LDES-011"], area:"LDES", sem:5},
    {id:"LDES-257", nombre:"Contratos civiles", req:["LDES-256"], area:"LDES", sem:5},
    {id:"LDES-284", nombre:"Argumentación jurídica", req:["LDES-283"], area:"LDES", sem:5},
    {id:"LDES-276", nombre:"Derecho administrativo", req:["TCDS-006"], area:"LDES", sem:5},

    // --- 6to ---
    {id:"LDES-267", nombre:"Procesal agrario", req:["LDES-266"], area:"LDES", sem:6},
    {id:"LDES-271", nombre:"Ejecución de penas", req:["LDES-269"], area:"LDES", sem:6},
    {id:"LDES-258", nombre:"Procesal civil", req:["LDES-257"], area:"LDES", sem:6},
    {id:"LDES-260", nombre:"Mercantil", req:["LDES-257"], area:"LDES", sem:6},
    {id:"LDES-273", nombre:"Amparo I", req:["LDES-284"], area:"LDES", sem:6},
    {id:"LDES-277", nombre:"Contencioso administrativo", req:["LDES-276"], area:"LDES", sem:6},
    {id:"LDES-280", nombre:"Derecho económico", req:["LDES-276"], area:"LDES", sem:6},

    // --- 7mo ---
    {id:"LDES-265", nombre:"Seguridad social", req:["LDES-264","LDES-267"], area:"LDES", sem:7},
    {id:"LDES-270", nombre:"Medicina forense", req:["LDES-269"], area:"LDES", sem:7},
    {id:"LDES-259", nombre:"Procesal familiar", req:["LDES-258"], area:"LDES", sem:7},
    {id:"LDES-261", nombre:"Procesal mercantil", req:["LDES-260"], area:"LDES", sem:7},
    {id:"LDES-274", nombre:"Amparo II", req:["LDES-273"], area:"LDES", sem:7},
    {id:"LDES-281", nombre:"Derecho internacional público", req:["LDES-280"], area:"LDES", sem:7},
    {id:"LDES-278", nombre:"Derecho fiscal", req:["LDES-276"], area:"LDES", sem:7},

    // --- 8vo ---
    {id:"LDES-272", nombre:"Litigación oral", req:["LDES-271","LDES-270"], area:"LDES", sem:8},
    {id:"LDES-262", nombre:"Notarial y registral", req:["LDES-259","LDES-261"], area:"LDES", sem:8},
    {id:"LDES-268", nombre:"Derecho ambiental", req:["LDES-276","LDES-281"], area:"LDES", sem:8},
    {id:"LDES-275", nombre:"Derecho electoral", req:["LDES-276","LDES-274"], area:"LDES", sem:8},
    {id:"LDES-282", nombre:"Internacional privado", req:["LDES-281"], area:"LDES", sem:8},
    {id:"LDES-279", nombre:"Procesal fiscal", req:["LDES-278","LDES-277"], area:"LDES", sem:8},
];

let cursadas = new Set();

function render() {
    const cont = document.getElementById("semestres-container");
    cont.innerHTML = "";

    for (let s = 1; s <= 8; s++) {
        const box = document.createElement("div");
        box.className = "semestre";
        box.innerHTML = `<h2>${s}° Semestre</h2>`;

        materias.filter(m => m.sem === s).forEach(mat => {
            const div = document.createElement("div");
            div.className = `materia ${mat.area}`;

            const requisitosCumplidos = mat.req.every(r => cursadas.has(r));

            if (!requisitosCumplidos) div.classList.add("bloqueada");
            if (cursadas.has(mat.id)) div.classList.add("cursada");

            div.textContent = `${mat.id} - ${mat.nombre}`;
            
            div.onclick = () => {
                if (!requisitosCumplidos) return;

                if (cursadas.has(mat.id)) cursadas.delete(mat.id);
                else cursadas.add(mat.id);

                render();
            };

            box.appendChild(div);
        });

        cont.appendChild(box);
    }
}

render();

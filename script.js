// Pega os elementos
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const modalFechar = document.getElementById('modalFechar')
const modalBandeira = document.getElementById('modalBandeira')
const modalPais = document.getElementById('modalPais')
const modalGrupo = document.getElementById('modalGrupo')
const modalJogos = document.getElementById('modalJogos')

// Abre o modal
function abrirModal(pais) {
    // Pega os jogos daquele país
    const jogosDoPais = jogos.filter(j => 
        j.casa === pais.nome || j.fora === pais.nome
    )

    // Preenche o header
    modalBandeira.src = pais.bandeira
    modalPais.textContent = pais.nome
    modalGrupo.textContent = `Grupo ${pais.grupo}`

    // Preenche os jogos
    modalJogos.innerHTML = jogosDoPais.map(jogo => `
        <div class="jogo-card">
            <span class="jogo-data">${jogo.data} às ${jogo.hora}</span>
            <div class="confronto">
               <span class="selecao time_casa" style="color: ${coresSelecoes[jogo.casa] || 'white'}">${jogo.casa}</span>
                <span class="placar">${jogo.placar}</span>
                <span class="selecao time_fora" style="color: ${coresSelecoes[jogo.fora] || 'white'}">${jogo.fora}</span>
            </div>
            <span class="jogo-local">📍 ${jogo.local}</span>
            <span class="status ${jogo.status}">${jogo.status.toUpperCase()}</span>
        </div>
    `).join('')

    // Ativa o modal
    modal.classList.add('ativo')
    overlay.classList.add('ativo')
    document.body.style.overflow = 'hidden' // trava o scroll
}

// Fecha o modal
function fecharModal() {
    modal.classList.remove('ativo')
    overlay.classList.remove('ativo')
    document.body.style.overflow = '' // libera o scroll
}

// Eventos para fechar
modalFechar.addEventListener('click', fecharModal)
overlay.addEventListener('click', fecharModal)

// Fecha com ESC
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharModal()
})

// Evento nas bandeiras
document.querySelectorAll('.bandeira').forEach(bandeira => {
    bandeira.addEventListener('click', () => {
        const pais = {
            nome: bandeira.dataset.nome,
            bandeira: bandeira.src,
            grupo: bandeira.dataset.grupo
        }
        abrirModal(pais)
    })
})
const jogos = [
     {
        data: '11/06/2026',
        hora: '16:00',
        casa: 'México',
        fora: 'África do Sul',
        placar: '- : -',
        local: 'Estádio Azteca, Cidade do México',
        status: 'agendado'
    },
     {
        data: '11/06/2026',
        hora: '23:00',
        casa: 'Coréia do Sul',
        fora: 'Tchéquia',
        placar: '- : -',
        local: 'Estadio Akron, Zapopan',
        status: 'agendado'
    },
     {
        data: '12/06/2026',
        hora: '16:00',
        casa: 'Canadá',
        fora: 'Bósnia e Herzegovina',
        placar: '- : -',
        local: 'BMO Field, Toronto',
        status: 'agendado'
    },
     {
        data: '12/06/2026',
        hora: '22:00',
        casa: 'EUA',
        fora: 'Paraguai',
        placar: '- : -',
        local: 'Sofi Estadium, Inglewood',
        status: 'agendado'
    },
     {
        data: '13/06/2026',
        hora: '16:00',
        casa: 'Qatar',
        fora: 'Suíça',
        placar: '- : -',
        local: 'Levis Stadium, Santa Clara',
        status: 'agendado'
    },
      {
        data: '13/06/2026',
        hora: '19:00',
        casa: 'Brasil',
        fora: 'Marrocos',
        placar: '- : -',
        local: 'MetLife Stadium, Los Angeles',
        status: 'agendado'
    },
    {
        data: '13/06/2026',
        hora: '22:00',
        casa: 'Haiti',
        fora: 'Escócia',
        placar: '- : -',
        local: 'Gillete Stadium, Foxborough',
        status: 'agendado'
    },

     {
        data: '14/06/2026',
        hora: '01:00',
        casa: 'Austrália',
        fora: 'Turquia',
        placar: '- : -',
        local: 'BC Place, Vancouver',
        status: 'agendado'
    },
     {
        data: '14/06/2026',
        hora: '14:00',
        casa: 'Alemanha',
        fora: 'Curaçao',
        placar: '- : -',
        local: 'NGR Stadium, Houston',
        status: 'agendado'
    },
     {
        data: '14/06/2026',
        hora: '17:00',
        casa: 'Holanda',
        fora: 'Japão',
        placar: '- : -',
        local: 'AT&T, Arlington',
        status: 'agendado'
    },
     {
        data: '14/06/2026',
        hora: '20:00',
        casa: 'Costa do Marfim',
        fora: 'Equador',
        placar: '- : -',
        local: 'Lincoln Financial Field, Filadélfia',
        status: 'agendado'
    },
     {
        data: '14/06/2026',
        hora: '23:00',
        casa: 'Suécia',
        fora: 'Tunísia',
        placar: '- : -',
        local: 'Estádio BBVA, Guadaloupe',
        status: 'agendado'
    },
     {
        data: '15/06/2026',
        hora: '13:00',
        casa: 'Espanha',
        fora: 'Cabo Verde',
        placar: '- : -',
        local: 'Mercedes-Benz Stadium, Atlanta',
        status: 'agendado'
    },
     {
        data: '15/06/2026',
        hora: '16:00',
        casa: 'Bélgica',
        fora: 'Egito',
        placar: '- : -',
        local: 'Lumen Field, Seattle',
        status: 'agendado'
    },
     {
        data: '15/06/2026',
        hora: '19:00',
        casa: 'Arábia Saudita',
        fora: 'Uruguai',
        placar: '- : -',
        local: 'Hard Rock Stadium, Miami Gardens',
        status: 'agendado'
    },
    {
        data: '15/06/2026',
        hora: '22:00',
        casa: 'Irã',
        fora: 'Nova Zelândia',
        placar: '- : -',
        local: 'Sofi Estadium, Inglewood',
        status: 'agendado'
    },
    {
        data: '16/06/2026',
        hora: '16:00',
        casa: 'França',
        fora: 'Senegal',
        placar: '- : -',
        local: 'MetLife Stadium, East Rutheford',
        status: 'agendado'
    },
    {
        data: '16/06/2026',
        hora: '19:00',
        casa: 'Iraque',
        fora: 'Noruega',
        placar: '- : -',
        local: 'Gillete Stadium, Foxborough',
        status: 'agendado'
    },
    {
        data: '16/06/2026',
        hora: '22:00',
        casa: 'Argentina',
        fora: 'Argélia',
        placar: '- : -',
        local: 'Arrowhead Stadium, Kansas City',
        status: 'agendado'
    },
    {
        data: '17/06/2026',
        hora: '01:00',
        casa: 'Áustria',
        fora: 'Jordânia',
        placar: '- : -',
        local: 'Levis Stadium, Santa Clara',
        status: 'agendado'
    },
    {
        data: '17/06/2026',
        hora: '14:00',
        casa: 'Portugal',
        fora: 'RD Congo',
        placar: '- : -',
        local: 'NGR Stadium, Houston',
        status: 'agendado'
    },
    {
        data: '17/06/2026',
        hora: '17:00',
        casa: 'Inglaterra',
        fora: 'Croácia',
        placar: '- : -',
        local: 'AT&T Stadium, Arlington',
        status: 'agendado'
    },
     {
        data: '17/06/2026',
        hora: '20:00',
        casa: 'Gana',
        fora: 'Panamá',
        placar: '- : -',
        local: 'BMO Field, Toronto',
        status: 'agendado'
    },
     {
        data: '17/06/2026',
        hora: '23:00',
        casa: 'Uzbequistão',
        fora: 'Colômbia',
        placar: '- : -',
        local: 'Estádio Azteca, Cidade do México',
        status: 'agendado'
    },
     {
        data: '18/06/2026',
        hora: '13:00',
        casa: 'Tchéquia',
        fora: 'África do Sul',
        placar: '- : -',
        local: 'Mercedes-Benz Stadium, Atlanta',
        status: 'agendado'
    },
     {
        data: '18/06/2026',
        hora: '16:00',
        casa: 'Suíça',
        fora: 'Bósnia e Herzegovina',
        placar: '- : -',
        local: 'Sofi Estadium, Inglewood',
        status: 'agendado'
    },
     {
        data: '18/06/2026',
        hora: '19:00',
        casa: 'Canadá',
        fora: 'Qatar',
        placar: '- : -',
        local: 'BC Place, Vancouver',
        status: 'agendado'
    },
     {
        data: '18/06/2026',
        hora: '22:00',
        casa: 'México',
        fora: 'Coréia do Sul',
        placar: '- : -',
        local: 'Estádio Akron, Zapopan',
        status: 'agendado'
    },
     {
        data: '19/06/2026',
        hora: '16:00',
        casa: 'EUA',
        fora: 'Austrália',
        placar: '- : -',
        local: 'Lumen Field, Seattle',
        status: 'agendado'
    },
      {
        data: '19/06/2026',
        hora: '19:00',
        casa: 'Escócia',
        fora: 'Marrocos',
        placar: '- : -',
        local: 'Gillete Stadium, FoxBorough',
        status: 'agendado'
    },
     {
        data: '19/06/2026',
        hora: '21:30',
        casa: 'Brasil',
        fora: 'Haiti',
        placar: '- : -',
        local: 'Lincoln Financial Field, Filadélfia',
        status: 'agendado'
    },
      {
        data: '20/06/2026',
        hora: '00:00',
        casa: 'Turquia',
        fora: 'Paraguai',
        placar: '- : -',
        local: 'Levi Stadium, Santa Clara',
        status: 'agendado'
    },
      {
        data: '20/06/2026',
        hora: '14:00',
        casa: 'Holanda',
        fora: 'Suécia',
        placar: '- : -',
        local: 'NRG Stadium, Houston',
        status: 'agendado'
    },
     {
        data: '20/06/2026',
        hora: '17:00',
        casa: 'Alemanha',
        fora: 'Costa do Marfim',
        placar: '- : -',
        local: 'BMO Field, Toronto',
        status: 'agendado'
    },
     {
        data: '20/06/2026',
        hora: '21:00',
        casa: 'Equador',
        fora: 'Curaçao',
        placar: '- : -',
        local: 'Arrowhead Stadium, Kansas City',
        status: 'agendado'
    },
     {
        data: '21/06/2026',
        hora: '01:00',
        casa: 'Tunísia',
        fora: 'Japão',
        placar: '- : -',
        local: 'Estádio BBVA, Guadaloupe',
        status: 'agendado'
    },
     {
        data: '21/06/2026',
        hora: '13:00',
        casa: 'Espanha',
        fora: 'Arábia Saudita',
        placar: '- : -',
        local: 'Mercedes-Benz Stadium, Atlanta',
        status: 'agendado'
    },
     {
        data: '21/06/2026',
        hora: '16:00',
        casa: 'Bélgica',
        fora: 'Irã',
        placar: '- : -',
        local: 'Sofi Stadium, Inglewood',
        status: 'agendado'
    },
     {
        data: '21/06/2026',
        hora: '19:00',
        casa: 'Uruguai',
        fora: 'Cabo Verde',
        placar: '- : -',
        local: 'Hard Rock Stadium, Miami Gardens',
        status: 'agendado'
    },
     {
        data: '21/06/2026',
        hora: '22:00',
        casa: 'Nova Zelândia',
        fora: 'Egito',
        placar: '- : -',
        local: 'BC Place, Vancouver',
        status: 'agendado'
    },
     {
        data: '22/06/2026',
        hora: '14:00',
        casa: 'Argentina',
        fora: 'Áustria',
        placar: '- : -',
        local: 'AT&T Stadium, Arlington',
        status: 'agendado'
    },
     {
        data: '22/06/2026',
        hora: '18:00',
        casa: 'França',
        fora: 'Iraque',
        placar: '- : -',
        local: 'Lincoln Financial Field, Filadélfia',
        status: 'agendado'
    },
     {
        data: '22/06/2026',
        hora: '21:00',
        casa: 'Noruega',
        fora: 'Senegal',
        placar: '- : -',
        local: 'MetLife, East Rutheford',
        status: 'agendado'
    },
     {
        data: '23/06/2026',
        hora: '00:00',
        casa: 'Jordânia',
        fora: 'Argélia',
        placar: '- : -',
        local: 'Levis Stadium, Santa Clara',
        status: 'agendado'
    },
     {
        data: '23/06/2026',
        hora: '14:00',
        casa: 'Portugal',
        fora: 'Uzbequistão',
        placar: '- : -',
        local: 'NRG Stadium, Houston',
        status: 'agendado'
    },
     {
        data: '23/06/2026',
        hora: '17:00',
        casa: 'Inglaterra',
        fora: 'Gana',
        placar: '- : -',
        local: 'Gillete Stadium, Foxborough',
        status: 'agendado'
    },
     {
        data: '23/06/2026',
        hora: '20:00',
        casa: 'Panamá',
        fora: 'Croácia',
        placar: '- : -',
        local: 'BMO Field, Toronto',
        status: 'agendado'
    },
     {
        data: '23/06/2026',
        hora: '23:00',
        casa: 'Colômbia',
        fora: 'RD Congo',
        placar: '- : -',
        local: 'Estádio Akron, Zapopan',
        status: 'agendado'
    },
     {
        data: '24/06/2026',
        hora: '16:00',
        casa: 'Suíça',
        fora: 'Canadá',
        placar: '- : -',
        local: 'Hard Rock Stadium, Miami Gardens',
        status: 'agendado'
    },
     {
        data: '24/06/2026',
        hora: '16:00',
        casa: 'Bósnia e Herzegovina',
        fora: 'Qatar',
        placar: '- : -',
        local: 'Lumen Field, Seattle',
        status: 'agendado'
    },
     {
        data: '24/06/2026',
        hora: '19:00',
        casa: 'Marrocos',
        fora: 'Haiti',
        placar: '- : -',
        local: 'Mercedes-Benz Stadium, Atlanta',
        status: 'agendado'
    },
     {
        data: '24/06/2026',
        hora: '19:00',
        casa: 'Escócia',
        fora: 'Brasil',
        placar: '- : -',
        local: 'BC Place, Vancouver',
        status: 'agendado'
    },
    
     {
        data: '24/06/2026',
        hora: '22:00',
        casa: 'África do Sul',
        fora: 'Coréia do Sul',
        placar: '- : -',
        local: 'Estádio BBVA, Guadaloupe',
        status: 'agendado'
    },
      {
        data: '24/06/2026',
        hora: '22:00',
        casa: 'Tchéquia',
        fora: 'México',
        placar: '- : -',
        local: 'Estádio Azteca, Cidade do México',
        status: 'agendado'
    },
     {
        data: '25/06/2026',
        hora: '17:00',
        casa: 'Curaçao',
        fora: 'Costa do Marfim',
        placar: '- : -',
        local: 'Lincoln Financial Field, Filadélfia',
        status: 'agendado'
    },
     {
        data: '25/06/2026',
        hora: '17:00',
        casa: 'Equador',
        fora: 'Alemanha',
        placar: '- : -',
        local: 'MetLife, East Rutheford',
        status: 'agendado'
    },
     {
        data: '25/06/2026',
        hora: '20:00',
        casa: 'Tunísia',
        fora: 'Holanda',
        placar: '- : -',
        local: 'Arrowhead Stadium, Kansas City',
        status: 'agendado'
    },
     {
        data: '25/06/2026',
        hora: '20:00',
        casa: 'Japão',
        fora: 'Suécia',
        placar: '- : -',
        local: 'AT&T Stadium, Arlington',
        status: 'agendado'
    },
     {
        data: '25/06/2026',
        hora: '23:00',
        casa: 'Turquia',
        fora: 'EUA',
        placar: '- : -',
        local: 'Sofi Stadium, Inglewood',
        status: 'agendado'
    },
     {
        data: '25/06/2026',
        hora: '23:00',
        casa: 'Paraguai',
        fora: 'Austrália',
        placar: '- : -',
        local: 'Levis Stadium, Santa Clara',
        status: 'agendado'
    },
     {
        data: '26/06/2026',
        hora: '16:00',
        casa: 'Noruega',
        fora: 'França',
        placar: '- : -',
        local: 'Gillete Stadium, Foxborough',
        status: 'agendado'
    },
    {
        data: '26/06/2026',
        hora: '16:00',
        casa: 'Senegal',
        fora: 'Iraque',
        placar: '- : -',
        local: 'BMO Field, Toronto',
        status: 'agendado'
    },
    {
        data: '26/06/2026',
        hora: '21:00',
        casa: 'Cabo Verde',
        fora: 'Arábia Saudita',
        placar: '- : -',
        local: 'NRG Stadium, Houston',
        status: 'agendado'
    },
    {
        data: '26/06/2026',
        hora: '21:00',
        casa: 'Uruguai',
        fora: 'Espanha',
        placar: '- : -',
        local: 'Estádio Akron, Zapopan',
        status: 'agendado'
    },
    {
        data: '27/06/2026',
        hora: '00:00',
        casa: 'Nova Zelândia',
        fora: 'Bélgica',
        placar: '- : -',
        local: 'BC Place, Vancouver',
        status: 'agendado'
    },
     {
        data: '27/06/2026',
        hora: '00:00',
        casa: 'Egito',
        fora: 'Irã',
        placar: '- : -',
        local: 'Lumen Field, Seattle',
        status: 'agendado'
    },
     {
        data: '27/06/2026',
        hora: '18:00',
        casa: 'Panamá',
        fora: 'Inglaterra',
        placar: '- : -',
        local: 'MetLife Stadium, East Rutherford',
        status: 'agendado'
    },
     {
        data: '27/06/2026',
        hora: '18:00',
        casa: 'Croácia',
        fora: 'Gana',
        placar: '- : -',
        local: 'Lincoln Financial Field, Filadélfia',
        status: 'agendado'
    },
     {
        data: '27/06/2026',
        hora: '20:30',
        casa: 'Colômbia',
        fora: 'Portugal',
        placar: '- : -',
        local:'Hard Rock Stadium, Miami Gardens',
        status: 'agendado'
    },
     {
        data: '27/06/2026',
        hora: '27:30',
        casa: 'RD Congo',
        fora: 'Uzbequistão',
        placar: '- : -',
        local: 'Mercedes-Benz-Stadium, Atlanta',
        status: 'agendado'
    },
     {
        data: '27/06/2026',
        hora: '23:00',
        casa: 'Argélia',
        fora: 'Áustria',
        placar: '- : -',
        local: 'Arrowhead Stadium, Kansas City',
        status: 'agendado'
    },
     {
        data: '27/06/2026',
        hora: '23:00',
        casa: 'Jordânia',
        fora: 'Argentina',
        placar: '- : -',
        local: 'AT&T Stadium, Arlington',
        status: 'agendado'
    },
   
    
]
const coresSelecoes = {
    'Brasil':     '#009c3b',
    'Argentina':  '#74acdf',
    'Portugal':   '#006600',
    'Alemanha':   '#000000',
    'França':     '#264093',
    'Espanha':    '#c60b1e',
    'EUA':        '#b22234',
    'México':     '#006847',
    'Japão':      '#bc002d',
    'Marrocos':   '#c1272d',
    'México':     '#006847',
    'África do Sul':'#006847',
    'Coréia do Sul': '#fff',
    'Tchéquia': '#11457E',
    'Canadá': '#FF0000',
    'Bósnia e Herzegovina': '#163494',
    'Qatar': '#8A1538',
    'Suíça': '#FF0000',
    'Haiti': '#1c46ee',
    'Escócia': '#005EB8',
    'Paraguai': '#D52B1E',
    'Austrália': '#2b50a6',
    'Turquia': '#E30A17',
    'Curaçao': '#0e3582',
    'Costa do Marfim': '#F77F00',
    'Equador': '#FFDD00',
    'Holanda': '#21468B',
    'Suécia': '#FECB00',
    'Tunísia': '#E70013',
    'Bélgica': '#FDDA25',
    'Egito': '#CE1126',
    'Irã': '#239F40',
    'Nova Zelândia': '#1c3a81',
    'Cabo Verde': '#003893',
    'Arábia Saudita': '#005430',
    'Uruguai': '#0038A8',
    'Senegal': '#FDEF42',
    'Iraque': '#fff',
    'Noruega': '#BA0C2F',
    'Argélia': '#006633',
    'Áustria': '#C8102E',
    'Jordânia': '#CE1126',
    'RD Congo': '#007FFF',
    'Uzbequistão': '#308738',
    'Colômbia': '#FFCD00',
    'Inglaterra': '#fff',
    'Croácia': '#FF0000',
    'Gana': '#006B3F',
    'Panamá': '#1b53ba'

   
}
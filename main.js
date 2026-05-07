const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

// TROCA DE ABAS
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
            for (let j = 0; j < botoes.length; j++) {
                        botoes[j].classList.remove("ativo");
                                    textos[j].classList.remove("ativo");
                                            }
                                                    botoes[i].classList.add("ativo");
                                                            textos[i].classList.add("ativo");
                                                                }
                                                                }

                                                                // CRONÔMETRO
                                                                const tempoObjetivo = new Date("2026-12-31T23:59:59");

                                                                function atualizaCronometro() {
                                                                    let tempoAtual = new Date();
                                                                        let tempoFinal = tempoObjetivo - tempoAtual;

                                                                            let segundos = Math.floor(tempoFinal / 1000);
                                                                                let minutos = Math.floor(segundos / 60);
                                                                                    let horas = Math.floor(minutos / 60);
                                                                                        let dias = Math.floor(horas / 24);

                                                                                            segundos %= 60;
                                                                                                minutos %= 60;
                                                                                                    horas %= 24;

                                                                                                        const resultado = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

                                                                                                            for (let i = 0; i < contadores.length; i++) {
                                                                                                                    contadores[i].textContent = resultado;
                                                                                                                        }
                                                                                                                        }

                                                                                                                        setInterval(atualizaCronometro, 1000);
                                                                                                                        atualizaCronometro();
                                                                                                                        
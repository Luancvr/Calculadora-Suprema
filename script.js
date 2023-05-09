let total = 0;
const resultadosElement = document.getElementById("resultados");
const totalElement = document.getElementById("total");

const valores = {
  placa: 180,
  adesivo_recorte: 150,
  adesivo: 70,
  adesivo_instalacao: 90,
  adesivo_pvc: 200,
  adesivo_pvc_4x4: 350,
  papel: 25,
  lona_ilhos: 75,
  lona: 70
};

function calcular() {
  const material = document.getElementById("material").value;
  const tamanho = Number(document.getElementById("tamanho").value);
  const largura = Number(document.getElementById("largura").value);
  const quantidade = Number(document.getElementById("quantidade").value);
  const instalacaoOutraCidade = document.getElementById(
    "instalacao_outra_cidade"
  ).checked;

  const valorMetroQuadrado = valores[material];
  if (!valorMetroQuadrado) {
    alert("Material inválido");
    return;
  }

  const area = (tamanho * largura) / 10000;
  let valorTotal = area * valorMetroQuadrado * quantidade;

  if (instalacaoOutraCidade) {
    valorTotal += 150;
    resultadosElement.innerHTML += `<p>Valor com instalação em outra cidade:<p>`;
  }

  resultadosElement.innerHTML += `<li class="resultado">${quantidade}x ${material} (${tamanho}cm x ${largura}cm) - R$ ${valorTotal.toFixed(
    2
  )}<button class="btn-remover"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20px" height="20px" viewBox="0 0 22 22"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg></button></li>`;

  total += valorTotal;
  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

  const btnsRemoverItem = document.querySelectorAll(".btn-remover");
  btnsRemoverItem.forEach(btn => {
    btn.addEventListener("click", () => {
      const li = btn.parentNode;
      const valor = parseFloat(li.textContent.match(/R\$ (\d+\.\d+)/)[1]);
      total -= valor;
      totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
      li.remove();
    });
  });
}

function limparResultados() {
  resultadosElement.innerHTML = "";
  total = 0;
  totalElement.textContent = "";
}

$('.nav a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset - 100
    },
    500
  );
});

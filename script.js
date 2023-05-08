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
    resultadosElement.innerHTML += `<li>Valor com instalação em outra cidade</li>`;
  }

  resultadosElement.innerHTML += `<li class="resultado">${quantidade}x ${material} (${tamanho}cm x ${largura}cm) - R$ ${valorTotal.toFixed(
    2
  )}</li>`;

  total += valorTotal;
  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
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

const deleteButtons = document.querySelectorAll('table button');
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const row = button.parentNode.parentNode;
    row.remove();
  });
});


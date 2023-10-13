export const phoneNumberUtils = {
  format: function (input) {
    const phoneNumber = input.value.replace(/\D/g, "");
    const formattedPhoneNumber = phoneNumber.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3"
    );
    input.value = formattedPhoneNumber;
  },
  unformat: function (input) {
    const unformattedPhoneNumber = input.value.replace(/\D/g, "");
    input.value = unformattedPhoneNumber;
  },
};

export function submitFormData(formData, onSuccess) {
  return fetch("https://api.apispreadsheets.com/data/S95RWRLe0l6lejGg/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => {
      if (res.status === 201) {
        // SUCESSO
        console.log("Dados enviados com sucesso!");
        onSuccess();
        return true;
      } else {
        // ERRO
        console.error("Erro ao enviar dados para a API.");
        return false; // Indica falha
      }
    })
    .catch((error) => {
      console.error("Erro de rede:", error);
      return false; // Indica falha
    });
}

export function setupFormSubmit() {
  const form = document.querySelector(".wc-contact__form");
  const submitButton = document.querySelector(".wc-contact__submit input");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const contactName = document.getElementById("wc-contact__name").value;
    const contactEmail = document.getElementById("wc-contact__email").value;
    const contactPhone = document.getElementById("wc-contact__phone").value;
    const contactMessage = document.getElementById("wc-contact__message").value;

    const formData = {
      data: {
        Nome: contactName,
        "E-mail": contactEmail,
        Celular: contactPhone,
        Mensagem: contactMessage,
      },
    };

    // Envia os dados para a API usando a função de envio
    submitFormData(formData, function () {
      // Limpa o formulário após 3 segundos
      setTimeout(() => {
        form.reset();
        // Atualiza o botão com uma mensagem padrão
        submitButton.value = "Enviar";
        submitButton.disabled = false; // Reativa o botão após a reinicialização do formulário
      }, 3000);

      // Atualiza o botão com uma mensagem
      submitButton.value = "Mensagem Enviada!";
      submitButton.disabled = true; // Opcional: Desativa o botão após o envio
    });
  });
}

document
  .getElementById("wc-contact__phone")
  .addEventListener("input", function () {
    phoneNumberUtils.format(this);
  });

setupFormSubmit();

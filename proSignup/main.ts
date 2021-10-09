// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");

      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  // handling the referer
  if (params.ref && params.ref.length === 43) {
    const signupForm = document.forms[0];
    // Create a hidden input element, and append it to the form:
    var input = document.createElement("input");
    input.type = "hidden";
    input.name = "referer";
    input.value = params.ref;
    signupForm.appendChild(input);
  }

  const acceptCheckbox = document.getElementById(
    "acceptedPolicy"
  ) as HTMLInputElement;

  const acceptedPermanence = document.getElementById(
    "acceptedPermanence"
  ) as HTMLInputElement;

  const submitButton = document.getElementById(
    "submit-button"
  ) as HTMLButtonElement;

  acceptCheckbox.onchange = function (ev: Event) {
    if (acceptedPermanence.checked && acceptCheckbox.checked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  };

  acceptedPermanence.onchange = function (ev: Event) {
    if (acceptedPermanence.checked && acceptCheckbox.checked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  };
})();

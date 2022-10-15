function toast({ title = "", message = "", type = "", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    //Auto remove
    const removeTime = duration + 1000;
    const autoRemove = setTimeout(() => {
      main.removeChild(toast);
    }, removeTime);

    //Click to remove
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemove);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      warning: "fas fa-exclamation-circle",
      danger: "fas fa-exclamation-circle",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);

    toast.style.animation = `slideLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
          <div class="toast__icon"><i class="${icon}"></i></div>
        <div class="toast__body">
          <h3 class="toast__title">${title}</h3>
          <div class="toast__msg">${message}</div>
        </div>
        <div class="toast__close">
          <i class="fas fa-times"></i>
        </div>
          `;
    main.appendChild(toast);
  }
}

function showMessage(type) {
  switch (type) {
    case "success":
      toast({
        title: "Success",
        message: "Successfully !",
        type: "success",
        duration: 1000,
      });
      break;
    case "warning":
      toast({
        title: "Warning",
        message: "Oops, Warning !",
        type: "warning",
        duration: 3000,
      });
      break;
    case "danger":
      toast({
        title: "Error",
        message: "Oh no, you have error !",
        type: "danger",
        duration: 3000,
      });
      break;
    default:
      alert("No message !");
  }
}

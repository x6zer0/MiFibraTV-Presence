module.exports = async function () {
  let canal = document.querySelector(".tw-leading-[18px]")?.textContent;

  return {
    details: "Viendo TV en Mi Fibra",
    state: canal ? `Canal: ${canal}` : "Cargando canal...",
    largeImageKey: "mifibratv",
    smallImageKey: "tv",
    startTimestamp: Date.now()
  };
};

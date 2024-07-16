const importFolder = () => {
  return importAll(require.context('../../assets/SkillsIcons', false, /\.svg$/));
};

// Função para retornar todos os itens dentro da pasta
function importAll(iconsInPaste) {
  return iconsInPaste.keys().map(iconsInPaste);
}

const IconFolder = () => {
  let icons = [];
  try {
      icons = importFolder();
  } catch (error) {
      console.error(`Erro ao carregar icons da pasta de icons`, error);
  }
  return icons;
}

export { IconFolder };

// Função para extrair o nome do arquivo sem extensão e sem hash e limitado em 35char (+35char pode ter problema com alinhamento no front)
export const extractFileName = (filePath) => {
    const fileNameWithExtension = filePath.split(' ').pop();
    const fileName = fileNameWithExtension.replace(/\.[a-f0-9]{8,}\..*/, '').replace(/\.pdf$/, '');
    return fileName.length > 35 ? fileName.substring(0, 35) + '...' : fileName;
  };
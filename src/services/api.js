import axios from 'axios';

/**
 * Função para buscar repositórios de um usuário no GitHub.
 * @param {string} username - Nome de usuário do GitHub.
 * @returns {Promise} - Promise com os dados dos repositórios.
 */
export const fetchGitHubRepos = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    
    // Ordenar repositórios por data de criação, do mais recente para o mais antigo
    const sortedRepos = response.data.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });

    return sortedRepos;
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error);
    throw new Error('Não foi possível buscar os repositórios.');
  }
};

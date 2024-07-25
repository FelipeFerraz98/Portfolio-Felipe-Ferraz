import React, { useEffect, useState } from "react";
import { fetchGitHubRepos } from "../../services/api"; // Importação da função para buscar repositórios
import { RepoList, ErrorText, RepoCard, Container, MainBoxWrapper, MainBox, Image } from "./styles";
import { Loading } from "../../components/Loading";
import { useTranslation } from 'react-i18next';
import GitHubLogo from '../../assets/ProjectsImages/GitHub.svg';
import ecs from '../../assets/ProjectsImages/ecslogo.png';
import ferraz from '../../assets/ProjectsImages/FerrazDevelopment.png';
import pokedex from '../../assets/ProjectsImages/pokedex.png';

const Projects = () => {
    const { t } = useTranslation();
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRepos = async () => {
        try {
            const username = "FelipeFerraz98";
            const data = await fetchGitHubRepos(username); // Uso da função para buscar repositórios
            setRepos(data);
        } catch (error) {
            setError("Não foi possível buscar os repositórios.");
        } finally {
            setLoading(false);
        }
        };

        getRepos();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorText>{error}</ErrorText>;
    }

    const handleClickOpenECSProject = () => {
        window.open('https://ecsmarcenaria.com.br/', '_blank', 'noopener,noreferrer');
        }

        const handleClickOpenPortfolio = () => {
            window.open('https://github.com/FelipeFerraz98/Portfolio-Felipe-Ferraz', '_blank', 'noopener,noreferrer');
        }

        const handleClickOpenPokedex = () => {
            window.open('https://felipeferraz98.github.io/Pokedex-React/#/', '_blank', 'noopener,noreferrer');
        }

    return (
        <Container>
        <MainBoxWrapper>
            <MainBox>
            <RepoList>
            <RepoCard onClick={handleClickOpenECSProject}>
                <h3>{t('projects.project1.title')}</h3>
                <Image src={ecs} alt="GitHub Logo" />
                <p>{t('projects.project1.detail')}</p>
                <p>{t('projects.click')}</p>
            </RepoCard>
            <RepoCard onClick={handleClickOpenPortfolio}>
                <h3>{t('projects.project2.title')}</h3>
                <Image src={ferraz} alt="GitHub Logo" />
                <p>{t('projects.project2.detail')}</p>
                <p>{t('projects.click')}</p>
            </RepoCard>
            <RepoCard onClick={handleClickOpenPokedex}>
                <h3>{t('projects.project3.title')}</h3>
                <Image src={pokedex} alt="GitHub Logo" />
                <p>{t('projects.project3.detail')}</p>
                <p>{t('projects.click')}</p>
            </RepoCard>
                {repos.map((repo) => (
                <RepoCard key={repo.id} href={repo.html_url} target="_blank">
                    <h3>{repo.name}</h3>
                    <Image src={GitHubLogo} alt="GitHub Logo" />
                    <p>{t('projects.language')} {repo.language || "N/A"}</p>
                    <p>{t('projects.click')}</p>
                </RepoCard>
                ))}
            </RepoList>
            </MainBox>
            </MainBoxWrapper>
        </Container>
    );
};

export { Projects };

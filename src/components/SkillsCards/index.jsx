import React from 'react';
import { Container, Card, TextContent, Image } from './styles';
import { IconFolder } from './importFiles';
import { extractFileName } from './extractFileName';

const SkillsCards = () => {
    const icons = IconFolder();
    return (
        <Container>
            {icons.map((icon, i) => (
                <Card key={i}>
                    <Image src={icon} alt={extractFileName(icon)} />
                    <TextContent>{extractFileName(icon)}</TextContent>
                </Card>
            ))}
        </Container>
    );
};

export { SkillsCards };

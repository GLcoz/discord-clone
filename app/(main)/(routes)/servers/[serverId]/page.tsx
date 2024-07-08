import { GetStaticProps, GetStaticPaths } from 'next';
import { FC } from 'react';

interface ServerIdPageProps {
    serverId: string; // Ensure serverId is a required string
}

const ServerIdPage: FC<ServerIdPageProps> = ({ serverId }) => {
    return (
        <div>
            Server ID Page: {serverId}
        </div>
    );
}

export default ServerIdPage;

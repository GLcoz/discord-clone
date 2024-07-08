import { GetStaticProps, GetStaticPaths } from 'next';

interface ServerIdPageProps {
    serverId?: string; // Make serverId optional if it's not always provided
}

const ServerIdPage: React.FC<ServerIdPageProps> = ({ serverId }) => {
    return (
        <div>
            Server ID Page: {serverId}
        </div>
    );
}

export default ServerIdPage;

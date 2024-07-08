import { GetStaticProps, GetStaticPaths } from 'next';

interface ServerIdPageProps {
    serverId: string;
}

const ServerIdPage: React.FC<ServerIdPageProps> = ({ serverId }) => {
    return (
        <div>
            Server ID Page
        </div>
    );
}

export default ServerIdPage;

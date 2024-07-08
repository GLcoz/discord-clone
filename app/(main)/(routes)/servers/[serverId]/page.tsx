import { GetStaticProps, GetStaticPaths, NextPage } from 'next';

interface ServerIdPageProps {
    serverId: string;
}

const ServerIdPage: NextPage<ServerIdPageProps> = ({ serverId }) => {
    return (
        <div>
            Server ID Page: {serverId}
        </div>
    );
};

export const getStaticProps: GetStaticProps<ServerIdPageProps> = async (context) => {
    const serverId = context.params?.serverId as string;

    return {
        props: {
            serverId,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { serverId: '1' } },
            { params: { serverId: '2' } },
        ],
        fallback: false,
    };
};

export default ServerIdPage;

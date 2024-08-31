import { NextPage } from 'next';

interface ProjectIdPageProps {
    params: {
        id: string;
    };
}

const ProjectIdPage: NextPage<ProjectIdPageProps> = ({ params }) => {
    return (
        <>
            <h2>Hello</h2>
        </>
    );
};

export default ProjectIdPage;

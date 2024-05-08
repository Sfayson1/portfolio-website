import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const projects = await fetchProjectData();
  const paths = projects.map(project => ({
    params: { slug: project.id },
  }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const project = await fetchProjectById(params.slug);
  return {
    props: { project },
  };
}

const ProjectPage = ({ project }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <img src={project.imageUrl} alt={project.name} />
    </div>
  );
};

export default ProjectPage;



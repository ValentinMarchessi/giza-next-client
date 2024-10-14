type Props = {
  children: React.ReactNode;
  hero: React.ReactNode;
  search: React.ReactNode;
  jobs: React.ReactNode;
};

export default function HomeLayout({ hero, search, jobs, children }: Props) {
  return (
    <article id="home-section">
      {hero}
      {search}
      {jobs}
    </article>
  );
}

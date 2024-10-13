type Props = {
  hero: React.ReactNode;
  search: React.ReactNode;
  jobs: React.ReactNode;
};

export default function HomeLayout({ hero, search, jobs }: Props) {
  return (
    <article id="home-section">
      {hero}
      {search}
      {jobs}
    </article>
  );
}

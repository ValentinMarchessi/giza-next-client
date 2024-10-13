import Hero from "./@hero/page";
import Search from "./@search/page";
import Jobs from "./@jobs/page";

type Props = {
  children: React.ReactNode;
};

export default function Home({ children }: Props) {
  return (
    <article id="home-section">
      <h1>This should not be seen</h1>
    </article>
  );
}

/**
 * Component for debugging purposes and test all front end components
 */

import Input from "@/components/Input";
import Select from "@/components/Select";
import Separator from "@/components/Separator";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 last:mb-0 flex flex-col gap-4">
      <Separator text={title} />
      {children}
    </div>
  );
}

export default function Debug() {
  return (
    <section className="mx-6 flex flex-col gap-4 mb-10">
      <Section title="Heading, Paragraphs and Links">
        <div>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, non aut in dolorum aliquam illum sit quo quisquam
            suscipit quos similique numquam odio debitis ipsam voluptatem illo
            ut. Iusto, consequuntur. Deleniti ipsam error consequuntur
            inventore! Saepe tempore veniam sapiente sunt quo tempora quaerat
            possimus obcaecati nesciunt illo voluptate repudiandae, nostrum quos
            accusantium ipsam quibusdam adipisci eius cum modi! Nihil, dolorem?
            Ducimus in necessitatibus debitis reprehenderit aspernatur eius
            earum, tenetur quo repudiandae obcaecati! Quis, dolorum ipsum
            cupiditate amet voluptate expedita, praesentium itaque molestias in
            nemo saepe, fuga veritatis sed eaque aperiam! Sunt, beatae mollitia,
            hic omnis natus excepturi repellat quaerat suscipit, autem corrupti
            veniam quod distinctio ea a numquam iusto. Nemo non alias architecto
            doloremque adipisci possimus repellat cum a unde. Voluptates vel
            quaerat delectus quo distinctio beatae nostrum et. Officia provident
            hic excepturi dolorem nobis ab corporis. Commodi in soluta accusamus
            animi autem cupiditate ullam facilis, qui ad. Numquam, quam. Labore
            deleniti, eligendi voluptatum esse dolore, unde sit cupiditate nobis
            corporis numquam nulla aperiam suscipit. Illum libero, impedit
            distinctio harum, adipisci perferendis nihil, provident omnis
            accusamus fugit suscipit dolore exercitationem? Omnis, nostrum odit
            veritatis nisi, impedit corrupti laudantium aut voluptas
            reprehenderit eaque a, maxime incidunt repellat eveniet hic delectus
            repudiandae ipsum ipsam libero! Repellendus excepturi autem eveniet,
            asperiores eius voluptatem. At atque cupiditate perferendis
            aspernatur omnis eligendi totam nulla maiores a debitis.
            Exercitationem ullam libero vitae dolorum harum. Expedita laboriosam
            rerum error eos explicabo tempore magni illum odit at quaerat? Eos,
            perspiciatis praesentium dignissimos molestias tempore ad eius dicta
            distinctio velit laudantium. Recusandae molestias aut quam laborum
            vero neque animi porro dicta fugiat reprehenderit sequi iure ex,
            esse delectus voluptatibus. Laudantium porro, ullam optio explicabo
            adipisci laborum quasi, eius praesentium quas soluta reiciendis
            inventore qui in quis, amet dolorum natus commodi voluptatibus nobis
            blanditiis officiis nihil facilis architecto? Amet, consequatur.
          </p>
          <a>Link</a>
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex gap-4 flex-wrap">
          <button className="btn-primary">Primary</button>
          <button className="btn-secondary">Secondary</button>
          <button className="btn-danger">Danger</button>
          <button className="btn-warning">Warning</button>
          <button className="btn-success">Success</button>
        </div>
      </Section>
      <Section title="Cards">
        <div className="flex gap-4 flex-wrap">
          <div className="card bg-primary-200 dark:bg-primary-800">
            <h3>Card 1</h3>
            <p>Content</p>
          </div>
          <div className="card bg-secondary-200 dark:bg-secondary-800">
            <h3>Card 2</h3>
            <p>Content</p>
          </div>
          <div className="card bg-neutral-200 dark:bg-neutral-950">
            <h3>Card 3</h3>
            <p>Content</p>
          </div>
        </div>
      </Section>
      <Section title="Inputs">
        <div className="flex gap-4 flex-wrap">
          <Input
            label="Text Input"
            type="text"
            placeholder="Text Input"
            className="rounded-lg"
          />
          <Input
            label="Name"
            type="text"
            value={"John Doe"}
            className="rounded-lg"
          />
          <Input
            label="E-mail"
            type="email"
            placeholder="Email Input"
            value={"john.doe@mail.com"}
            className="input"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Password Input"
            value={"password"}
            className="input"
          />
          <Select label="Select">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>
          <Input type="file" name="File Input" label="File" />
        </div>
      </Section>
    </section>
  );
}

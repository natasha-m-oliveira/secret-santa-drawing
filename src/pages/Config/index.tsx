import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form';
import { ParticipantsList } from '../../components/ParticipantsList';

export const Config = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Form />
        <ParticipantsList />
        <Footer />
      </section>
    </Card>
  );
};

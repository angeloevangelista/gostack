import Mail from '../../lib/Mail';

class CreationMail {
  get key() {
    return 'CreationMail';
  }

  async handle({ data }) {
    const { deliveryman, recipient, delivery } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova entrega',
      template: 'creation',
      context: {
        deliveryman,
        recipient,
        delivery,
      },
    });
  }
}

export default new CreationMail();

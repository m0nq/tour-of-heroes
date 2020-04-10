import { MessageService } from './message.service';

describe('Message Service:', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it('should have no messages to start', () => {
    expect(service.messages.length).toBe(0);
  });

  it('should add a message what add is called', () => {
    service.add('message1');

    expect(service.messages.length).toBe(1);
  });

  it('should remove all messages when clear is called', () => {
    expect(service.messages.length).toBe(0);
    service.add('message1');
    expect(service.messages.length).toBe(1);

    service.clear();

    expect(service.messages.length).toBe(0);
  });
});

import { Response, Request } from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, Array
// interfaces

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Angelo',
    email: 'angelo@evan.com',
    password: 'TSAEvanWord!!',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      {
        title: 'JavaScript',
        experience: 100,
      },
    ],
  });

  console.log(user?.name);

  return response.json({ message: 'Hello World' });
}

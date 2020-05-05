import ajv from 'ajv';
import { Form } from '../../../../src';
import svkExtend from '../../extension/svk';
import svk from '../../../../src/validators/SVK';

const schema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      minLength: 6,
      maxLength: 20,
      title: 'Username',
      default: 'SteveJobs',
    },
    email: {
      type: 'string',
      format: 'email',
      minLength: 5,
      maxLength: 20,
      title: 'Email',
      default: 's.jobs@apple.com',
    },
    password: {
      type: 'string',
      minLength: 6,
      maxLength: 20,
      title: 'Password',
      default: 'thinkdifferent',
    },
    devSkills: {
      range: [5, 10],
      /* title: 'Dev Skills', default: 5 */
    },
  },
};

const plugins = {
  svk: svk({
    package: ajv,
    extend: svkExtend,
    schema,
  }),
};

export default new Form({}, { plugins, name: 'Flat-H' });

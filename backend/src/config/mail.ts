interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal ',

  defaults: {
    from: {
      email: 'haniel340@gmail.com',
      name: 'hanielbiazon',
    },
  },
} as IMailConfig;

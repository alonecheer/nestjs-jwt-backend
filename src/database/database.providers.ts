
import { Sequelize } from 'sequelize-typescript';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '0123456',
        database: 'test',
      });
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
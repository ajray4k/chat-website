import { ConnectionOptions } from "typeorm";
import { env } from "../constants";
import { BookEntity } from "../features/Book/BookEntity";
import { AuthorEntity } from "../features/Author/AuthorEntity";

export const dbConfig: ConnectionOptions = {
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  host: env.DB_HOST,
  port: env.DB_PORT,
  type: "mysql",
  synchronize: true,
  entities: [BookEntity, AuthorEntity]
};

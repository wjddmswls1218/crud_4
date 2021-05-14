import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connect from "../db";
import Book from "./models/Book";
import Author from "./models/Author";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connect();

const allBook = async () => {
  const books = await Book.find().populate({
    path: `author`,
    model: Author,
  });
  console.log(books);
};

const allAuthor = async () => {
  const author = await Author.find().populate({
    path: `books`,
    model: Book,
  });

  console.log(author);
};

allAuthor();

app.listen(PORT, () => {
  console.log(` Server Start, http://locahost:${PORT}`);
});

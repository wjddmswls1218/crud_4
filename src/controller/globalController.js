import Book from "../models/Book";
import Author from "../models/Author";

export const homeController = async (req, res) => {
  const {
    query: { seq, searchValue },
  } = req;

  console.log(seq);
};

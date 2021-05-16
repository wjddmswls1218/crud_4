import Book from "../models/Book";
import Author from "../models/Author";

export const homeController = async (req, res) => {
  const {
    query: { seq, searchValue },
  } = req;

  console.log(seq);
  console.log(searchValue);

  try {
    if (!seq && searchValue) {
      const books = await Books.find().populate({
        path: `author`,
        model: Author,
      });
      res.render("screens/home", { books: books });
    } else {
      if (seq === "title") {
        const books = await Books.find({
          title: { $regex: `.*${searchValue}.*` },
        }).populate({
          path: `author`,
          model: Author,
        });
        res.render("screens/home", { books: books });
      } else {
        if (seq === "author") {
          const books = await Books.find().populate({
            path: `author`,
            model: Author,
            match: {
              name: { regex: `.*${searchValue}.*` },
            },
          });
          const nextBook = books.filter((data) => data.author !== aull);

          res.render("screens/home", { books: nextBook });
        }
      }
    }
  } catch (e) {
    console.log(e);
    res.render("screens/home", { books: [] });
  }
};

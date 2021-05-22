import Author from "../models/Author";
import Book from "../models/Book";

///////////////////Author///////////////////
export const authorViewController = async (req, res) => {
  try {
    const result = await Author.find().populate({
      path: `books`,
      model: Book,
    });
    console.log(result);

    res.render("screens/authorView", { authorList: result });
  } catch (e) {
    console.log(e);
  }
};

export const authorDetailController = (req, res) => {
  res.render("screens/authorDetail");
};

export const authorCreateController = async (req, res) => {
  res.render("screens/authorCreate");
};

///////////////////Book///////////////////
export const bookViewController = async (req, res) => {};

export const bookDetailController = (req, res) => {
  res.render("screens/bookDetai");
};

export const bookCreateController = (req, res) => {
  res.render("screens/bookCreate");
};

export const postCreateAuthorController = async (req, res) => {
  const {
    body: { authorName, authorBirth, authorbelong, authorGender },
  } = req;

  try {
    const result = await Author.create({
      name: authorName,
      birth: authorBirth,
      gender: authorGender,
      belong: authorbelong,
    });
    authorCreateController(req, res);
  } catch (e) {
    console.log(e);
    authorCreateController(req, res);
  }
};

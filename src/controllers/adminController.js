import Author from "../models/Author";

///////////////////Author///////////////////
export const authorViewController = (req, res) => {
  res.render("screens/authorView");
};

export const authorDetailController = (req, res) => {
  res.render("screens/authorDetail");
};

export const authorCreateController = async (req, res) => {
  res.render("screens/authorCreate");
};

///////////////////Book///////////////////
export const bookViewController = (req, res) => {
  res.render("screens/bookView");
};

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

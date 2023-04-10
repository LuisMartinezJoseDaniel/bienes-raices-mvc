import { Handler, Response } from "express";

const formularioLogin: Handler = (_, res: Response) => {
  res.render("auth/login", {});
};
const formularioRegistro: Handler = (_, res: Response) => {
  res.render("auth/registro", {});
};

export { formularioLogin, formularioRegistro };

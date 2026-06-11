import { InkList } from "inkjs";

export const config = {
  id: "last-changed-var",
  highlight: false,
  isDeprecated: false,
  returnType: "any",
  description: "The name of the last changed Ink variable",
  params: [],
};

export const expose = true;

export default function () {
  return this._lastChangedVar;
}

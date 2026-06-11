import { InkList } from "inkjs";

export const config = {
  id: "var-value",
  highlight: false,
  isDeprecated: false,
  returnType: "any",
  description: "The value of an ink variable",
  params: [
    {
      id: "var",
      name: "Variable",
      desc: "The ink variable to fetch the value for",
      type: "string",
    },
  ],
};

export const expose = true;

export default function (name) {
    let value = this._story.variablesState[name];
    if (value instanceof InkList) {
        return value.maxItem.Key.itemName;
    } else {
        return value;
    }
}

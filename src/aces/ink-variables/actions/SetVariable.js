export const config = {
  id: "set-variable",
  highlight: false,
  isDeprecated: false,
  isAsync: false,
  listName: "Set variable",
  displayText: "Set Variable: {0} <- {1}",
  description: "Set the value of an ink variable.",
  params: [
    {
      id: "var",
      name: "Variable",
      desc: "The ink variable to start set.",
      type: "string",
      initialValue: "",
    },
    {
      id: "value",
      name: "Variable",
      desc: "The value to set the variable to.",
      type: "any",
      initialValue: "",
    },
  ],
};

export const expose = true;

export default function (name, value) {
    this._story.variablesState[name] = value;
}

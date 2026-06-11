export const config = {
  id: "var-changed",
  highlight: false,
  isDeprecated: false,
  isTrigger: true,
  listName: "On variable changed",
  displayText: "On variable {0} changed",
  description: "Trigger when variable changes values",
  params: [
    {
      id: "var",
      name: "Variable",
      desc: "The name of the ink variable to watch",
      type: "string",
      initialValue: "",
    },
  ],
};

export const expose = true;

export default function (name) {
  return this._lastChangedVar === name;
}

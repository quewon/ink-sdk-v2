export const config = {
  id: "add-param",
  highlight: false,
  isDeprecated: false,
  isAsync: false,
  listName: "Add parameter",
  displayText: "Add parameter {0}",
  description: "Add a parameter to an Ink function call.",
  params: [
    {
      id: "param",
      name: "Parameter",
      desc: "The value of the parameter.",
      type: "any",
      initialValue: "",
    },
  ],
};

export const expose = true;

export default function (param) {
    this._functionParams.push(param);
}

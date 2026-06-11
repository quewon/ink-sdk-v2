export const config = {
  id: "start-watching-var",
  highlight: false,
  isDeprecated: false,
  isAsync: false,
  listName: "Watch variable",
  displayText: "Listening for changes in {0}",
  description: "Start listening for changes in ink variable.",
  params: [
    {
      id: "var",
      name: "Variable",
      desc: "The ink variable to start listening.",
      type: "string",
      initialValue: "",
    },
  ],
};

export const expose = true;

export default function (name) {
    this._story.ObserveVariable(name, (name, new_value) => {
        this._lastChangedVar = name;
        this._trigger("OnVariableChanged");
        this._trigger("OnAnyVariableChanged");
    });
}

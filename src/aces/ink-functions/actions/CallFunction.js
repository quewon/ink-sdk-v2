export const config = {
  id: "call-function",
  highlight: false,
  isDeprecated: false,
  isAsync: false,
  listName: "Call function",
  displayText: "Call {0}",
  description: "Call an Ink function.",
  params: [
    {
      id: "func",
      name: "Function name",
      desc: "The name of the function that you want to run.",
      type: "string",
      initialValue: "",
    },
  ],
};

export const expose = true;

export default function (func) {
    const result = this._story.EvaluateFunction(func, this._functionParams, true);
    this._lastFunctionResult = {
        returned: this.toConstructAllowedValue(result.returned),
        output: result.output
    };
    this._functionParams = [];
}

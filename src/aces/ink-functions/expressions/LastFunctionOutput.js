export const config = {
  id: "last-function-output",
  highlight: false,
  isDeprecated: false,
  returnType: "any",
  description: "The output value of your last Ink function call.",
  params: [],
};

export const expose = true;

export default function () {
    return this._lastFunctionResult.output;
}

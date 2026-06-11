export const config = {
  id: "last-function-return",
  highlight: false,
  isDeprecated: false,
  returnType: "any",
  description: "The return value of your last Ink function call.",
  params: [],
};

export const expose = true;

export default function () {
    return this._lastFunctionResult.returned;
}

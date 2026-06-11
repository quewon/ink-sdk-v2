export const config = {
  id: "eval-function",
  highlight: false,
  isDeprecated: false,
  isVariadicParameters: true,
  returnType: "any",
  description: "The output of your Ink function.",
  params: [
    {
      id: "func",
      name: "Function name",
      desc: "The name of the function that you want to run.",
      type: "string",
    },
  ],
};

export const expose = true;

export default function (func) {
    const value = this._story.EvaluateFunction(func, [...arguments].slice(1));
    return this.toConstructAllowedValue(value);
}

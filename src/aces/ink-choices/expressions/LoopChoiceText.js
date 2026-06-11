export const config = {
  id: "loop-choice-text",
  highlight: false,
  isDeprecated: false,
  returnType: "string",
  description: "Get the text of the current choice in the loop",
  params: [],
};

export const expose = true;

export default function () {
  return this._loopedChoice?.text ?? "";
}

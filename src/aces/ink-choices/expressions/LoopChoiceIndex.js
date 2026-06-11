export const config = {
  id: "loop-choice-index",
  highlight: false,
  isDeprecated: false,
  returnType: "number",
  description: "Get the index of the current choice in the loop",
  params: [],
};

export const expose = true;

export default function () {
  return this._loopedChoice?.index ?? -1;
}

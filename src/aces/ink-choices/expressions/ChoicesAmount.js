export const config = {
  id: "choices-amount",
  highlight: false,
  isDeprecated: false,
  returnType: "number",
  description: "Number of available choices.",
  params: [],
};

export const expose = true;

export default function () {
  return this._story.currentChoices.length;
}

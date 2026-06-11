export const config = {
  id: "choice-text",
  highlight: false,
  isDeprecated: false,
  returnType: "string",
  description: "Text to display for the given choice.",
  params: [
    {
      id: "choice",
      name: "Choice",
      desc: "The index of the choice in the list.",
      type: "number",
    },
  ],
};

export const expose = true;

export default function (i) {
  return this._story.currentChoices[i].text;
}

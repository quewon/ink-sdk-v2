export const config = {
  id: "tags-amount",
  highlight: false,
  isDeprecated: false,
  returnType: "number",
  description: "Number of available tags.",
  params: [],
};

export const expose = true;

export default function () {
  return this._story.currentTags.length;
}

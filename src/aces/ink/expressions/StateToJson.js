export const config = {
  id: "save-state",
  highlight: false,
  isDeprecated: false,
  returnType: "string",
  description: "The state of the story as a JSON string.",
  params: [],
};

export const expose = true;

export default function () {
  return this._story.state.ToJson();
}

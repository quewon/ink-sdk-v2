export const config = {
  id: "current-text",
  highlight: true,
  isDeprecated: false,
  returnType: "string",
  description: "Text built by the last call to Continue.",
  params: [],
};

export const expose = true;

export default function () {
  return this._story.currentText;
}

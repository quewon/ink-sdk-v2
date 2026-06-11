export const config = {
  id: "loop-tag-text",
  highlight: false,
  isDeprecated: false,
  returnType: "string",
  description: "Get the text of the current tag in the loop",
  params: [],
};

export const expose = true;

export default function () {
    return this._loopedTag?.tag ?? "";
}

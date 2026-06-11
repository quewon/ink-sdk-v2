export const config = {
  id: "loop-tag-index",
  highlight: false,
  isDeprecated: false,
  returnType: "number",
  description: "Get the index of the current tag in the loop",
  params: [],
};

export const expose = true;

export default function () {
    return this._loopedTag?.index ?? -1;
}

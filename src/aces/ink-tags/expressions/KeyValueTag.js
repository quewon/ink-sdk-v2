export const config = {
  id: "key-value-tag",
  highlight: false,
  isDeprecated: true,
  returnType: "string",
  description: "Get the value corresponding to a key in a tag formatted to have 'KEY SEPARATOR VALUE'. Spaces around SEPARATOR are ignored.",
  params: [
    {
      id: "key",
      name: "Key",
      desc: "The KEY to look for in the tags",
      type: "string",
    },
    {
      id: "sep",
      name: "Separator",
      desc: "The separator between KEY and VALUE.",
      type: "string",
    },
  ],
};

export const expose = true;

export default function (key, sep) {
    for (const tag of this._story.currentTags) {
        let indexofsep = tag.indexOf(sep);
        if (indexofsep >= 0 && tag.slice(0, indexofsep).trim() == key) {
            return tag.slice(indexofsep + sep.length).trim();
        }
    }
    return "";
}

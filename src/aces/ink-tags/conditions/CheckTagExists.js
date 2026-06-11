export const config = {
  id: "check-tags",
  highlight: false,
  isDeprecated: false,
  listName: "Check tag exists",
  displayText: "Tags contain {0}",
  description: "Check that a specific tag exists in the passage",
  params: [
    {
      id: "tag",
      name: "Tag",
      desc: "The tag to look for",
      type: "string",
      initialValue: "",
    },
  ],
};

export const expose = true;

export default function (tag) {
  return this._story.currentTags.includes(tag);
}

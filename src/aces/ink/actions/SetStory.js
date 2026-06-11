import { Story } from "inkjs";

export const config = {
  id: "set-story",
  highlight: false,
  isDeprecated: false,
  isAsync: false,
  listName: "Set story",
  displayText: "Load story from {0}",
  description: "Load a story in the ink engine.",
  params: [
    {
      id: "story-json",
      name: "Story JSON string",
      desc: "The story data to load into ink. Most likely coming from a file.",
      type: "string",
      initialValue: ""
    },
  ],
};

export const expose = true;

export default function (jsonstr) {
  this._storyjson = jsonstr;
	this._story = new Story(jsonstr);
}

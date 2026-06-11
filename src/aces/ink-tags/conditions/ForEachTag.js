export const config = {
  id: "for-each-tag",
  highlight: false,
  isDeprecated: false,
  isLooping: true,
  listName: "For each tag",
  displayText: "For each available tag",
  description: "Loop over every currently available tag. Use 'LoopTagText' and 'LoopTagIndex' to get its info.",
  params: [],
};

export const expose = true;

export default function () {
    const loopContext = this.runtime.sdk.createLoopingConditionContext();
    for (let index=0; index<this._story.currentTags.length; index++) {
        this._loopedTag = { index, tag: this._story.currentTags[index] };
        loopContext.retrigger();
        if (loopContext.isStopped)
            break;
    }
    loopContext.release();
    this._loopedTag = null;
}

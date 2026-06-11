import { Story } from "inkjs";
import { id, addonType } from "../../config.caw.js";
import AddonTypeMap from "../../template/addonTypeMap.js";

export default function (parentClass) {
  return class extends parentClass {
    constructor(inst, properties) {
      super(inst);

			// story data
			this._story = null;

			// caches and buffers
			this._storyjson = null;
			this._loopedChoice = null;
			this._loopedTag = null;

      this._functionParams = [];
			this._lastChangedVar = "";

			if (properties)		// note properties may be null in some cases
			{
			}
    }

    _trigger(method) {
      this.dispatch(method);
      super._trigger(self.C3[AddonTypeMap[addonType]][id].Cnds[method]);
    }

    on(tag, callback, options) {
      if (!this.events[tag]) {
        this.events[tag] = [];
      }
      this.events[tag].push({ callback, options });
    }

    off(tag, callback) {
      if (this.events[tag]) {
        this.events[tag] = this.events[tag].filter(
          (event) => event.callback !== callback
        );
      }
    }

    dispatch(tag) {
      if (this.events[tag]) {
        this.events[tag].forEach((event) => {
          if (event.options && event.options.params) {
            const fn = self.C3[AddonTypeMap[addonType]][id].Cnds[tag];
            if (fn && !fn.call(this, ...event.options.params)) {
              return;
            }
          }
          event.callback();
          if (event.options && event.options.once) {
            this.off(tag, event.callback);
          }
        });
      }
    }

    _release() {
      super._release();
    }

    _saveToJson() {
      return {
				storyjson: this._story ? this._story.ToJson() : null,
				storystate: this._story ? this._story.state.ToJson() : null
			};
    }

    _loadFromJson(o) {
      this._story = new Story(o.storyjson);
			this._story.state.LoadJson(o.storystate);
    }

    toConstructAllowedValue(value) {
      if (typeof value === 'boolean') {
          return value ? 1 : 0;
      } else if (value === null || value === undefined) {
          return "";
      } else if (typeof value === 'string' || typeof value === 'number') {
          return value;
      }
      return value.toString();
    }
  };
}

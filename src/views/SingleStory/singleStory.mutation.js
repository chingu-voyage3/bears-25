import { MUTATE_SINGLE_STORY } from './singleStory.type';

export default {
  [MUTATE_SINGLE_STORY]: (state, story) => {
    const singleStory = { ...state.singleStory, ...story };
    state.singleStory = singleStory;
  }
}

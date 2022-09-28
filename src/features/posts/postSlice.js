import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [{
  id: nanoid(),
  title: 'First post',
  content: 'first post content',
  publishedAt: sub(new Date(), { minutes: 10 }).toISOString(),
  reactions: {
    '☕': 0,
    '👍': 0,
    '😂': 0,
    '🥰': 0
  }
}, {
  id: nanoid(),
  title: 'First post',
  content: 'second post content',
  publishedAt: sub(new Date(), { minutes: 10 }).toISOString(),
  reactions: {
    '☕': 0,
    '👍': 0,
    '😂': 0,
    '🥰': 0
  }
}, {
  id: nanoid(),
  title: 'First post',
  content: 'third post content',
  publishedAt: sub(new Date(), { minutes: 10 }).toISOString(),
  reactions: {
    '☕': 0,
    '👍': 0,
    '😂': 0,
    '🥰': 0
  }
}]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, { payload }) => {
        state.push(payload)
      },
      prepare: ({ title, content, userId }) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            publishedAt: sub(new Date(), { minutes: 10 }).toISOString(),
            reactions: {
              '☕': 0,
              '👍': 0,
              '😂': 0,
              '🥰': 0
            }
          }
        }
      }
    },
    reactionAdded: (state, { payload }) => {
      console.log(payload)

    }
  }
})


export const { postAdded, reactionAdded } = postSlice.actions

export const selectAllPosts = (state) => state.posts

export default postSlice.reducer
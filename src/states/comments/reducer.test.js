/**
 * test scenario for commentsReducer
 *
 * - commentsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the comments when given by RECEIVE_COMMENTS action
 *  - should return the comments with the new comment when given by ADD_COMMENT action
 *
 */

import commentsReducer from './reducer';

describe('commentsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = commentsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the comments when given by RECEIVE_COMMENTS action', () => {
    const initialState = [];
    const action = {
      type: 'RECEIVE_COMMENTS',
      payload: {
        comments: [
          {
            id: 'comment-1',
            content: 'Talk Test 1',
            createdAt: '2022-09-22T10:06:55.588Z',
            owner: {
              id: 'user-1',
              name: 'Owner name 1',
              avatar: 'https://ui-avatars.com/api/?name=Owner name 1&background=random',
            },
          },
          {
            id: 'comment-2',
            content: 'Talk Test 2',
            createdAt: '2022-09-22T20:06:55.588Z',
            owner: {
              id: 'user-2',
              name: 'Owner name 2',
              avatar: 'https://ui-avatars.com/api/?name=Owner name 2&background=random',
            },
          },
        ],
      },
    };

    const nextState = commentsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.comments);
  });

  it('should return the comments with the new comment when given by ADD_COMMENT action', () => {
    const initialState = [
      {
        id: 'comment-1',
        content: 'Talk Test 1',
        createdAt: '2022-09-22T10:06:55.588Z',
        owner: {
          id: 'user-1',
          name: 'Owner name 1',
          avatar: 'https://ui-avatars.com/api/?name=Owner name 1&background=random',
        },
      },
    ];

    const action = {
      type: 'ADD_COMMENT',
      payload: {
        comment: {
          id: 'comment-2',
          content: 'Talk Test 2',
          createdAt: '2022-09-22T20:06:55.588Z',
          owner: {
            id: 'user-2',
            name: 'Owner name 2',
            avatar: 'https://ui-avatars.com/api/?name=Owner name 2&background=random',
          },
        },
      },
    };

    const nextState = commentsReducer(initialState, action);

    expect(nextState).toEqual([action.payload.comment, ...initialState]);
  });
});

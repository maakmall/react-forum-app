/**
 * test scenario for threadsReducer
 *
 * - threadsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with the new thread when given by ADD_THREAD action
 *
 */

import threadsReducer from './reducer';

describe('threadsReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread Title Test 1',
            body: 'Thread Body Test 1',
            category: 'test-1',
            createdAt: '2022-09-22T10:06:55.588Z',
            ownerId: 'user-1',
            totalComments: 1,
          },
          {
            id: 'thread-2',
            title: 'Thread Title Test 2',
            body: 'Thread Body Test 2',
            category: 'test-2',
            createdAt: '2022-09-22T20:06:55.588Z',
            ownerId: 'user-2',
            totalComments: 2,
          },
        ],
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Title Test 1',
        body: 'Thread Body Test 1',
        category: 'test-1',
        createdAt: '2022-09-22T10:06:55.588Z',
        ownerId: 'user-1',
        totalComments: 1,
      },
    ];

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Title Test 2',
          body: 'Thread Body Test 2',
          category: 'test-2',
          createdAt: '2022-09-22T20:06:55.588Z',
          ownerId: 'user-2',
          totalComments: 2,
        },
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });
});

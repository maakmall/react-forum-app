/**
 * skenario test
 *
 * - asyncAddThread thunk
 *  - should dispatch action correctly when fetching success
 *  - should dispatch action and call alert correctly when fetching failed
 */

import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncAddThread, addThreadActionCreator } from './action';

const fakeThreadResponse = {
  id: 'thread-1',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'user-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncAddThread thunk', () => {
  beforeEach(() => {
    api._createThread = api.createThread;
  });

  afterEach(() => {
    api.createThread = api._createThread;
    delete api._createThread;
  });

  it('should dispatch action correctly when fetching success', async () => {
    const newThread = {
      title: 'Thread title test 1',
      body: 'Thread body test 1',
      category: 'test',
    };
    api.createThread = ({ title, body, category }) => Promise.resolve({
      ...fakeThreadResponse,
      title,
      body,
      category,
    });
    const dispatch = jest.fn();

    await asyncAddThread(newThread)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator({
      ...fakeThreadResponse,
      ...newThread,
    }));
  });

  it('should dispatch action and call alert correctly when fetching failed', async () => {
    api.createThread = () => Promise.reject(fakeErrorResponse);
    const dispatch = jest.fn();
    window.alert = jest.fn();

    await asyncAddThread({})(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

import { put, call, takeLatest, all } from 'redux-saga/effects';
import { safeSaga } from '@store/utils';
import { defaultFunction } from '@global/constants';
import { ApiClient } from '@api';
import { successLoadItems, failLoadItems, loadItems } from './slice';
import { LoadItemsPayload } from './types';

function* loadItemsSaga({
  page,
  pageSize,
  filterParams: { sorter = {} } = {},
  callback = defaultFunction,
}: LoadItemsPayload) {
  try {
    const sorterEntries = Object.entries(sorter)[0];
    let Order;
    let OrderBy;
    if (sorterEntries) {
      Order = sorterEntries[1];
      if (Order !== undefined) {
        OrderBy = sorterEntries[0];
      }
    }
    const response = yield call(ApiClient.get, '/api-path', {
      params: {
        Page: page,
        PageSize: pageSize,
        PageSizeLimit: pageSize,
        Order: Order ?? '1',
        OrderBy: OrderBy ?? 'attributeName',
      },
    });
    const items = response.data;
    yield put(
      successLoadItems({
        items,
        totalCount: +response.headers['x-paging-totalcount'],
      }),
    );
    callback(true, items);
  } catch (error) {
    console.log('error', error);
    const errors = error?.errorList || [];
    yield put(failLoadItems({ errors }));
    callback(false, errors);
  }
}

const recovery = (err: any) => console.log('caught', err);

export default function* services() {
  yield all([takeLatest(loadItems, safeSaga(recovery, loadItemsSaga))]);
}

import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';
import { BUG_HISTORY } from '../datas/bugHistory';
import { MY_BUGS } from '../datas/myBug';
import { PRODUCT_BUGS } from '../datas/productBugs';

const bugsHandlers = [
  http.get(baseURL('/bugs/history'), async () => {
    await delay(1000);
    return HttpResponse.json(BUG_HISTORY, { status: 200 });
  }),
  http.get(baseURL('/bugs'), async () => {
    await delay(1000);
    return HttpResponse.json(MY_BUGS, { status: 200 });
  }),
  http.get(baseURL('/bugs/products'), async () => {
    await delay(1000);
    return HttpResponse.json(PRODUCT_BUGS, { status: 200 });
  }),
  http.post(
    baseURL('/bugs/products/:productId/purchase'),
    async ({ params: { productId } }) => {
      await delay(1000);
      const target = PRODUCT_BUGS.products.find(({ id }) => productId === id);
      return HttpResponse.json(
        {
          paymentId: target?.id,
          orderName: target?.name,
          price: target?.price
        },
        { status: 200 }
      );
    }
  )
];

export default bugsHandlers;

import paymentHandler from './payment';
import examplePostHandlers from './examplePosts';
import exampleCommentHandlers from './exampleComments';
import roomsHandlers from './rooms';
import membersHandlers from './members';
import bugsHandlers from './bugs';
import couponsHandlers from './coupons';
import reportsHandlers from './reports';
import notificationsHandlers from './notifications';
import timeHandler from './time';

const handlers = [
  ...examplePostHandlers,
  ...exampleCommentHandlers,
  ...roomsHandlers,
  ...membersHandlers,
  ...bugsHandlers,
  ...couponsHandlers,
  ...reportsHandlers,
  ...notificationsHandlers,
  ...paymentHandler,
  timeHandler
];

export default handlers;

export class OrderItem {
  product?: string;
  quantity?: number;
}

export class Order {
  orderItems?: OrderItem[];
  totalPrice?: string;
  user?: any;
}

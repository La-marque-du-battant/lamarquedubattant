type UserType = {
  id?: string;
  lastname?: string;
  firstname?: string;
  email: string;
  password: string;
  role: string;
};

type CollectionType = {
  id?: string;
  name: string;
  description: string;
  image?: string;
  products?: ProductType[];
};

type CategoryType = {
  id: string;
  name: string;
  description: string;
};

type ProductType = {
  id: string;
  name: string;
  description: string;
  main_image: string;
  additionnal_images: string[];
  category_id: string;
  status: string;
  collections: CollectionType[];
  size: string[];
  color: string;
  price: number;
  quantity: number;
  expense?: number;
  created_at: string;
  updated_at: string;
};

type OrderColumnType = {
  id: string;
  customer: string;
  products: number;
  totalAmount: number;
  createdAt: string;
};

type OrderItemType = {
  product: ProductType;
  color: string;
  size: string;
  quantity: number;
};

type CustomerType = {
  clerkId: string;
  name: string;
  email: string;
};

type EventType = {
  id: string;
  name: string;
  description: string;
  address: string;
  image: string;
  price: number;
  country: string;
  startDate: Date;
  endDate: Date;
};

type RoleType = {
  id: string;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
};

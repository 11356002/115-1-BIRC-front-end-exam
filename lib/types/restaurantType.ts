/** GET /api/restaurants → Restaurant[] */
export interface Restaurant {
  id: number;
  name: string;
  address: string;
  isOpen: boolean;
}

/** GET /api/restaurants/:restaurantId/menu → Menu */
export interface Menu {
  restaurantId: number;
  categories: MenuCategory[];
}

export interface MenuCategory {
  id: number;
  name: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  stock: number;
  isAvailable: boolean;
}

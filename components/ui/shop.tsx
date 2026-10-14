
import { useEffect, useMemo, useState } from "react";
import type { Restaurant } from "@/lib/types/restaurantType";
import restaurantAPI from "@/lib/api/restaurantAPI";

interface ShopProps {
  onSelect: (restaurant: Restaurant) => void;
}

export default function Shop({ onSelect }: ShopProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const fetchRestaurants = async () => {
      try {
        const data = await restaurantAPI.getRestaurants();

        if (active) {
          setRestaurants(data);
        }
      } catch {
        if (active) {
          setError("餐廳列表載入失敗，請稍後再試。");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchRestaurants();

    return () => {
      active = false;
    };
  }, []);

  const cities = useMemo(
    () =>
      Array.from(
        new Set(
          restaurants
            .map((restaurant) =>
              restaurant.address.match(/^.+?[縣市]/)?.[0]
            )
            .filter((city): city is string => Boolean(city))
        )
      ),
    [restaurants]
  );

  const filteredRestaurants = useMemo(
    () =>
      restaurants
        .filter(
          (restaurant) =>
            restaurant.address.match(/^.+?[縣市]/)?.[0] === selectedCity
        )
        .sort(
          (a, b) =>
            Number(b.isOpen) - Number(a.isOpen) ||
            a.name.localeCompare(b.name, "zh-Hant")
        ),
    [restaurants, selectedCity]
  );

  const handleSelect = (restaurant: Restaurant) => {
    if (!restaurant.isOpen) return;

    setSelectedRestaurant(restaurant.id);
    onSelect(restaurant);
  };

  if (loading) {
    return <div>餐廳列表載入中...</div>;
  }

  if (error) {
    return <div role="alert">{error}</div>;
  }

  if (restaurants.length === 0) {
    return <div>目前沒有可顯示的餐廳。</div>;
  }

  return (
    <section>
      <label htmlFor="shop-city">選擇縣市</label>
      <select
        id="shop-city"
        value={selectedCity}
        onChange={(event) => {
          setSelectedCity(event.target.value);
          setSelectedRestaurant(null);
        }}
      >
        <option value="">請選擇縣市</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      {selectedCity && (
        <div>
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <button
                key={restaurant.id}
                type="button"
                disabled={!restaurant.isOpen}
                aria-pressed={selectedRestaurant === restaurant.id}
                onClick={() => handleSelect(restaurant)}
                className={
                  !restaurant.isOpen
                    ? "shopClosed"
                    : selectedRestaurant === restaurant.id
                      ? "shopSelected"
                      : "shopItem"
                }
              >
                <span>{restaurant.name}</span>
                <span>{restaurant.address}</span>
                <span>{restaurant.isOpen ? "營業中" : "休息中"}</span>
              </button>
            ))
          ) : (
            <div>此縣市目前沒有餐廳。</div>
          )}
        </div>
      )}
    </section>
  );
}

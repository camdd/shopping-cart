import React from 'react';
import { useId } from 'react';
import './Filters.css';
import { useFilters } from '../hooks/useFilters';
import * as Slider from '@radix-ui/react-slider';

export function Filters() {
  const { filters, setFilters } = useFilters();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (value) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
<div>
        <label htmlFor={minPriceFilterId}>Min Price</label>
        <Slider.Root
          className="SliderRoot"
          value={[filters.minPrice]}
          onValueChange={(newValue) => handleChangeMinPrice(newValue)}
          min={0}
          max={1000}
          step={1}
        >
          <Slider.Track className="SliderTrack">
            <Slider.Range className="SliderRange" />
          </Slider.Track>
          <Slider.Thumb className="SliderThumb" />
        </Slider.Root>
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
}


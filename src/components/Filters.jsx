
import { useId} from "react"
import { useProducts } from "../hooks/useProducts"


export function Filters () {
	const {filters, setFilters} = useProducts()
	const minPriceFilterId = useId()
	const categoryFilterId = useId()

	
	const handleChangeMinPrice = (e) => {
		window.scrollTo({ top: 0, behavior: "smooth" })
		setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
	}

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }
  return (
	<aside className="aside-filters">
		<label htmlFor={categoryFilterId}>Categoria:
			<select name="categoria" id={categoryFilterId} onChange={handleChangeCategory}>
				<option value="all">All</option>
				<option value="beauty">beauty</option>
				<option value="fragrances">fragrances</option>
				<option value="furniture">furniture</option>
				<option value="groceries">groceries</option>
			</select>
		</label>
		<label htmlFor={minPriceFilterId}>
		<input type="range" name="" id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice} value={filters.minPrice} />
		<span className="price"> {filters.minPrice} </span>
		</label>	
	</aside>
	)
}
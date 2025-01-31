import ProductList from '@/components/shared/product/product-list'
import sampleData from '@/db/sample-data'

const Homepage = () => {
  return (
    <div>
      <h2>Latest Products</h2>
      <ProductList
        title="Newest Arrivals"
        data={sampleData.products}
        limit={4}
      />
    </div>
  )
}

export default Homepage

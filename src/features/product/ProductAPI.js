// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    const response = await fetch("http://localhost:8082/products")
    const data = await response.json()
    resolve({data})
  }
  );
}
export function fetchProductById(id) {
  return new Promise(async (resolve) =>{
    const response = await fetch("http://localhost:8082/products/"+id)
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchProductsByFilter(filter,sort,pagination) {

  let queryString = '';
   for(let key in filter){
        const cateogryValues = filter[key];
        if(cateogryValues.length){
        const lastCateogryValue = cateogryValues[cateogryValues.length-1]
        queryString += `${key}=${lastCateogryValue}&`;
        }
   }
   for(let key in sort){
    queryString += `${key}=${sort[key]}&`;

   }
console.log(pagination);
   for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`;
   }
  return new Promise(async (resolve) =>{
    const response = await fetch("http://localhost:8082/products?"+queryString)
    const data = await response.json()
    // const totalItems = await response.headers.get('X-Total-Count')

    // resolve({data:{products:data,totalItems:+totalItems}})
    resolve({data:{products:data}})
  }
  );
}

export function fetchCategories() {
  return new Promise(async (resolve) =>{
    const response = await fetch("http://localhost:8082/categories")
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchBrands() {
  return new Promise(async (resolve) =>{
    const response = await fetch("http://localhost:8082/brands")
    const data = await response.json()
    resolve({data})
  }
  );
}
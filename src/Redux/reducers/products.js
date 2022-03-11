const initialProducts = {
    allProducts: [
        {
            "id": "06f5602e-30b3-45c9-af27-08344bcb9606",
            "name": "Fantastic Metal Chips",
            "price": "675.00",
            "image": "http://placeimg.com/640/480/abstract",
            "addToCart": false
        },
        {
            "id": "d6f04f5c-5c9e-4489-98c3-5c1ce1a9ea31",
            "name": "Handmade Concrete Gloves",
            "price": "731.00",
            "image": "http://placeimg.com/640/480/business",
            "addToCart": false
        },
        {
            "id": "3b3d1987-fc76-4cad-9812-62abbc665847",
            "name": "Ergonomic Cotton Towels",
            "price": "827.00",
            "image": "http://placeimg.com/640/480/food",
            "addToCart": false
        },
        {
            "id": "62ad0f18-3092-467b-b3df-39ee2233c789",
            "name": "Awesome Metal Hat",
            "price": "16.00",
            "image": "http://placeimg.com/640/480/food",
            "addToCart": false
        },
        {
            "id": "d4c2ff40-a0a9-4882-949f-bfab5a2e6422",
            "name": "Tasty Wooden Soap",
            "price": "489.00",
            "image": "http://placeimg.com/640/480/sports",
            "addToCart": false
        },
        {
            "id": "f47cc6d4-4561-41cb-af84-cb5902dd03c4",
            "name": "Generic Cotton Soap",
            "price": "536.00",
            "image": "http://placeimg.com/640/480/business",
            "addToCart": false
        },
        {
            "id": "d672791c-e64f-465c-b463-0838917d211e",
            "name": "Incredible Frozen Ball",
            "price": "914.00",
            "image": "http://placeimg.com/640/480/food",
            "addToCart": false
        },
        {
            "id": "d2b8c458-1865-425d-802f-d78f9afff9aa",
            "name": "Ergonomic Fresh Computer",
            "price": "264.00",
            "image": "http://placeimg.com/640/480/cats",
            "addToCart": false
        },
        {
            "id": "2be0700c-4245-420f-b398-b03a3f48caed",
            "name": "Ergonomic Metal Pizza",
            "price": "200.00",
            "image": "http://placeimg.com/640/480/city",
            "addToCart": false
        },
        {
            "id": "0efb85c4-696f-42ad-bde1-a729dea56896",
            "name": "Refined Concrete Gloves",
            "price": "448.00",
            "image": "http://placeimg.com/640/480/fashion",
            "addToCart": false
        },
        {
            "id": "15e5dc69-618f-4c7f-820e-134e32385b7b",
            "name": "Intelligent Rubber Chips",
            "price": "996.00",
            "image": "http://placeimg.com/640/480/nature",
            "addToCart": false
        },
        {
            "id": "a3d33f10-bf86-43a2-aef0-d5c0e43d9474",
            "name": "Handmade Cotton Ball",
            "price": "713.00",
            "image": "http://placeimg.com/640/480/fashion",
            "addToCart": false
        },
        {
            "id": "35750065-065a-41ff-80d9-b1961c244d67",
            "name": "Rustic Wooden Pizza",
            "price": "235.00",
            "image": "http://placeimg.com/640/480/city",
            "addToCart": false
        },
        {
            "id": "74d72d32-8dc0-4cba-b22a-ac29d98ed021",
            "name": "Fantastic Fresh Shirt",
            "price": "319.00",
            "image": "http://placeimg.com/640/480/food",
            "addToCart": false
        },
        {
            "id": "935f5fbd-4f89-4ccf-9017-69c2096a7d6e",
            "name": "Fantastic Soft Pizza",
            "price": "427.00",
            "image": "http://placeimg.com/640/480/animals",
            "addToCart": false
        },
        {
            "id": "a88d0219-d96d-4758-933b-e900fb28488f",
            "name": "Tasty Concrete Bike",
            "price": "323.00",
            "image": "http://placeimg.com/640/480/people",
            "addToCart": false
        },
        {
            "id": "ac41fcd9-43f5-4b36-bf14-3cba7c77c860",
            "name": "Handmade Soft Chicken",
            "price": "77.00",
            "image": "http://placeimg.com/640/480/city",
            "addToCart": false
        },
        {
            "id": "5650e338-ec16-4b32-9d7a-7ff153e82302",
            "name": "Unbranded Fresh Chips",
            "price": "700.00",
            "image": "http://placeimg.com/640/480/technics",
            "addToCart": false
        },
        {
            "id": "4365cb9d-61c7-41f5-872d-c8dfe12f9f2c",
            "name": "Awesome Fresh Shoes",
            "price": "866.00",
            "image": "http://placeimg.com/640/480/animals",
            "addToCart": false
        },
        {
            "id": "23eba098-f940-4f3f-ae23-20a6de9c1345",
            "name": "Fantastic Granite Fish",
            "price": "395.00",
            "image": "http://placeimg.com/640/480/abstract",
            "addToCart": false
        }
    ],
    totalCount: 0,
    selectedProducts: [],
    totalAmount: 0,
    earnedPoints: 0,
    txnWithEarnedPoints: [],
    historyDetails: []
};
export const productReducer = (state = initialProducts, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return { ...state };
        case 'SET_SELECTED_PRODUCTS':
            return { ...state, allProducts: action.payload }
        case 'GET_SELECTED_PRODUCTS':
            return { ...state };
        case 'CLR_DETAILS': {
            let products = [...state.allProducts];
            products.map((items, index) => { products[index] = { ...products[index], addToCart: false }; });
            return { ...state, allProducts: products, totalCount: 0, selectedProducts: [], totalAmount: 0, earnedPoints: 0 };
        }
        case 'SET_HISTORY':
             let history = [...state.historyDetails];
             history.push(action.data);
            return { ...state, historyDetails: history };

        case 'GET_SELECTED_PRODUCTS_COUNT': {
            let products = [...state.allProducts];
            let countval = 0;
            let slectedProducts = [];
            let totalAmt = 0;
            let points = 0;
            products.map((items) => {
                if (items.addToCart === true) {
                    countval++;
                    slectedProducts.push(items);
                    totalAmt += parseInt(items.price.split(".")[0])
                }
            });
            if (totalAmt > 100) {
                points = (2 * (totalAmt - 100)) + (1 * (50))
            } else if (totalAmt >= 50 && totalAmt < 100) {
                points = (1 * (totalAmt - 50))
            } else if (totalAmt < 50) {
                points = 0;
            }
            return { ...state, totalCount: countval, selectedProducts: slectedProducts, totalAmount: totalAmt, earnedPoints: points }
        }
        default:
            return state;
    }
};

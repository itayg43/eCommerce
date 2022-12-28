import groq from 'groq';

export const getAllProductsQuery = groq`
*[_type == "product"]{
    "id": _id,
    name,
    description,
    category,
    price,
    "imageUrl": image.asset->url
}
`;

export const getProductByIdQuery = groq`
*[_type == "product" && _id == $id][0]{
    "id": _id,
    name,
    description,
    category,
    price,
    "imageUrl": image.asset->url
}
`;

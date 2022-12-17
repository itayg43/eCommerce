import groq from 'groq';

export const getAllProductsQuery = groq`
*[_type == "product"]{
    _id,
    name,
    description,
    category,
    price,
    "imageUrl": image.asset->url
}
`;

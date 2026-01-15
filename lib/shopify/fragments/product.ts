import imageFragment from "./image";
import seoFragment from "./seo";

export const productDetailsFragment = /* GraphQL */ `
  fragment productDetails on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
social_post: metafields(identifiers: [
      { namespace: "custom", key: "social_post" }
    ]) {
      key
      namespace
      value
    }
    amenities: metafield(namespace: "custom", key: "amenities") {
      value
    }
    extraServices: metafield(namespace: "custom", key: "extra_services") {
      value
    }
    houseRules: metafield(namespace: "custom", key: "house_rules") {
      value
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 100) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
  }
  ${imageFragment}
  ${seoFragment}
`;

export const productCardFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 10) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 10) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
  }
  ${imageFragment}
  ${seoFragment}
`;

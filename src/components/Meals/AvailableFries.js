import React from "react";
import FriesList from "./FriesList";
import classes from './CardPage.module.css'
const DUMMY_FRIES = [
  {
    id: "smallFries",
    name: "Small Fries",
    price: 1.4,
    image:
      "https://lh3.googleusercontent.com/pw/AM-JKLVocyPQ5hm9Hv8W2AW-MLxW2MPqTX7rzn30oulOUTCGnngCcSLXJ2hqLgOW2c56uqMiG-Bg8jSaA32V2tzBG6gz7InwkJzWuchDbTXG4xoVFvc_nK5XhBD9Xlvf3StWIix6WuoGon95C9wDDOkgYLI=w250-h160-no?authuser=0",
  },
  {
    id: "mediumFries",
    name: "Medium Fries",
    price: 2,
    image:
      "https://lh3.googleusercontent.com/pw/AM-JKLUnUIKEfNxWNfWElvIpWie5ZarLi-rV_ybSa7sO6iQpF6Rqy7XvaChkbflhrrdGqLSWYZCiixTk8Fo1IE0ZRn9mM_0NbB3FXVtS7Do1OfnAB6bsnNvK4C1cEYrF5CBvPtn-ArKg0cX4zNxN-aI-VMM=w250-h160-no?authuser=0",
  },
  {
    id: "cheeseFries",
    name: "Fries with Cheese",
    price: 2.5,
    image:
      "https://lh3.googleusercontent.com/pw/AM-JKLWq6g8qMPqODolmYm7T2q9_YopedXXhA3ZX6vXsf72cUQxgpCR6xjZtc5dEezlLUz3Lh1mBPFQ6_1J75McO99D_SsvwWUmlMrMT28Om1wlp42TaY-TRSdlu4sxyD0gqLmgOdfs63yxyyrF3sr1Xck8=w250-h160-no?authuser=0",
  },
  {
    id: "cheeseFriesBacon",
    name: "Fries with CheeseBacon",
    price: 2.6,
    image:
      "https://lh3.googleusercontent.com/pw/AM-JKLVYp47qpvOgmKCVtnzFzI4TYAiigfmGRjo_sorT6pb5ZYwUguTUikzZcVj8BTsBANAzcaC_JHERGWENy5_UneultnUqdf1qrZ701-zuraDIeeLkFR3mIFWJ-aCojfwRHNBAlZq6wBqOsK-wdvFH53w=w250-h160-no?authuser=0",
  },
];

const AvailableFries = () => {
  const fries = DUMMY_FRIES.map((item) => (
    <FriesList
      key={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
    />
  ));
  return <section className={classes.cardPage}>{fries}</section>;
};

export default AvailableFries;

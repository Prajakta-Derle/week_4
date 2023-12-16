import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slices/productsSlice";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ id, name, text, img, price, color }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filteredProducts/${type}/` + id}>
      <Card className=" w-90 " onClick={() => dispatch(singleProduct(id))}>
        <CardHeader color="blue" className=" relative h-90">
          <img src={img} alt="immg-blur-shadow" className=" h-full w-full" />
        </CardHeader>
        <CardBody className=" text-center">
          <Typography variant="h5" className=" mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className=" flex items-center justify-between py-3">
          <Typography variant="small"> ${price}</Typography>
          <Typography variant="small" color="gray" className=" flex gap-1">
            {color?.map((color, index) => {
              return (
                <i
                  className=" fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4"
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;

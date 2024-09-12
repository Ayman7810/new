/** @format */

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'; // تأكد من تضمين ملف CSS
import ProductSlider from './ProductSlider'; // تأكد من صحة المسار

// بيانات المنتجات
import jacket1 from '../../../images/products/jacket-1.jpg';
import jacket2 from '../../../images/products/jacket-2.jpg';
import clothes1 from '../../../images/products/clothes-1.jpg';
import clothes2 from '../../../images/products/clothes-2.jpg';
import shorts1 from '../../../images/products/1.jpg';
import short2 from '../../../images/products/2.jpg';
import shorts3 from '../../../images/products/3.jpg';
import short4 from '../../../images/products/4.jpg';
import { Button } from 'react-bootstrap';

const ProductContainerGridSlider = () => {
  const products = [
    {
      imgSrcDefault: jacket1,
      imgSrcHover: jacket2,
      altText: 'Mens Winter Leathers Jackets',
      badge: '15%',
      badgeClass: 'angle black',
      category: 'jacket',
      title: 'Mens Winter Leathers Jackets',
      rating: 3,
      price: '$48.00',
      oldPrice: '$75.00'
    },
    {
      imgSrcDefault: clothes1,
      imgSrcHover: clothes2,
      altText: "Men's Leather Formal Wear shoes",
      badge: '',
      badgeClass: '',
      category: 'formal',
      title: "Men's Leather Formal Wear shoes",
      rating: 4,
      price: '$50.00',
      oldPrice: '$65.00'
    },
    {
      imgSrcDefault: shorts1,
      imgSrcHover: shorts3,
      altText: 'Better Basics French Terry Sweatshorts',
      badge: 'sale',
      badgeClass: 'angle black',
      category: 'shorts',
      title: 'Better Basics French Terry Sweatshorts',
      rating: 3,
      price: '$78.00',
      oldPrice: '$85.00'
    },
    {
      imgSrcDefault: short2,
      imgSrcHover: short4,
      altText: 'Stylish Summer Hat',
      badge: 'new',
      badgeClass: 'pink',
      category: 'accessories',
      title: 'Stylish Summer Hat',
      rating: 4,
      price: '$25.00',
      oldPrice: '$35.00'
    },
    {
      imgSrcDefault: jacket1,
      imgSrcHover: jacket2,
      altText: 'Mens Winter Leathers Jackets',
      badge: '15%',
      badgeClass: 'angle black',
      category: 'jacket',
      title: 'Mens Winter Leathers Jackets',
      rating: 3,
      price: '$48.00',
      oldPrice: '$75.00'
    },
    {
      imgSrcDefault: clothes1,
      imgSrcHover: clothes2,
      altText: "Men's Leather Formal Wear shoes",
      badge: '',
      badgeClass: '',
      category: 'formal',
      title: "Men's Leather Formal Wear shoes",
      rating: 4,
      price: '$50.00',
      oldPrice: '$65.00'
    },
    {
      imgSrcDefault: shorts1,
      imgSrcHover: shorts3,
      altText: 'Better Basics French Terry Sweatshorts',
      badge: 'sale',
      badgeClass: 'angle black',
      category: 'shorts',
      title: 'Better Basics French Terry Sweatshorts',
      rating: 3,
      price: '$78.00',
      oldPrice: '$85.00'
    },
    {
      imgSrcDefault: short2,
      imgSrcHover: short4,
      altText: 'Stylish Summer Hat',
      badge: 'new',
      badgeClass: 'pink',
      category: 'accessories',
      title: 'Stylish Summer Hat',
      rating: 4,
      price: '$25.00',
      oldPrice: '$35.00'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container">
      <div className="product-header row ">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h2>الاكثر مبيعاً</h2>
          <Button className="rounded-pill btn-more" style={{backgroundColor:'#ff66b2',border:'none'}}>المزيد</Button>
        </div>
      </div>
      <Slider {...settings} className="product-slider py-4">
        {products.map((product, index) => (
          <ProductSlider
            key={index}
            imgSrcDefault={product.imgSrcDefault}
            imgSrcHover={product.imgSrcHover}
            altText={product.altText}
            badge={product.badge}
            badgeClass={product.badgeClass}
            category={product.category}
            title={product.title}
            rating={product.rating}
            price={product.price}
            oldPrice={product.oldPrice}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductContainerGridSlider;

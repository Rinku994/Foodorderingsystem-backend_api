const { response } = require('express');
const Category = require('../Models/category');
const Carousel = require('../Models/home_carouse');
const Products = require('../Models/Products');


const HomeCarouselSilder = (req, res = response) => {


    Carousel.find({}).exec((err, carousel) => {

        if (err) {
            return res.status(400).json({
                resp: false,
                msj: "error: Without List of images",
                err
            });
        }

        res.json({
            resp: true,
            msj: 'List Images - Home ',
            slider: carousel
        });

    });


}

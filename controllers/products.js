const Product = require("../models/product");

const getAllProducts = async (req, res) => {

    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};

    if (company){
        queryObject.company = company;
        
    }

    if (featured) {
        queryObject.featured = featured;
    }

    if (name){
        queryObject.name = {$regex: name, $options: "i"};
    }

    let apidata = Product.find(queryObject);

    if(sort){
        let sortfix = sort.split(",").join(" ");
        apidata = apidata.sort(sortfix);
    }

    if(select){ 
        // let selectfix = select.replace(","," ");
        let selectfix = select.split(",").join(" ");
        apidata = apidata.select(selectfix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.page) || 10;

    let skip = (page - 1) * limit;

    apidata = apidata.skip(skip).limit(limit);

    console.log(queryObject.company);
    
    const products = await apidata;
    res.status(200).json({products, nbHits: products.length});

};

const getAllProductsTesting = async (req, res) => {
    const products = await Product.find(req.query);
    // sort = name,price;
    
    res.status(200).json({ products });
};


module.exports = {getAllProducts, getAllProductsTesting};
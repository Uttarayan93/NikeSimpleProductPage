import styles from "./Product.module.css";

const Product = () => {
  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.title}>YOUR FEET DESERVE THE BEST</h1>
        <h4 className={styles.para}>
          YOUR FEET DESERVE THE BEST & WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST & WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </h4>
        <div>
          <button className={styles.shop_btn}>
            <a
              href="https://www.amazon.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Now
            </a>
          </button>
          <button className={styles.category_btn}>Category</button>
        </div>
        <p>Also Available On</p>
        <div className={styles.brandimage}>
          <a
            href="https://www.flipkart.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/flipkart.png" alt="flipkart" />
          </a>
          <a
            href="https://www.amazon.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/amazon.png" alt="amazon" />
          </a>
        </div>
      </div>
      <div>
        <img src="./images/shoe_image.png" alt="shoe-image" />
      </div>
    </div>
  );
};

export default Product;

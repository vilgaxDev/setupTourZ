import React from "react";
import BlogCardGama from "./BlogCardGama";

function BlogCardWrap() {
  return (
    <>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <BlogCardGama
            thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-1.png"}
            writter="John Smith"
            date="November 16, 2022"
            title="Sollicitudin urna metus iaculis odio eget efficitur leo."
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <BlogCardGama
            thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-2.png"}
            writter="John Smith"
            date="November 17, 2022"
            title="Variustempor convallis, mi ligula an suscipit nunc."
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <BlogCardGama
            thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-3.png"}
            writter="John Smith"
            date="November 17, 2022"
            title="Aenean auctor porta sodales. Suspendisse fringilla neque."
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <BlogCardGama
            thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-4.png"}
            writter="John Smith"
            date="November 17, 2022"
            title="Sollicitudin urna metus iaculis odio eget efficitur leo."
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <BlogCardGama
            thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-5.png"}
            writter="John Smith"
            date="November 17, 2022"
            title="Variustempor convallis, mi ligula an suscipit nunc."
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <BlogCardGama
            thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-6.png"}
            writter="John Smith"
            date="November 17, 2022"
            title="Nulla urna leo, volutpat eu maurisa eget luctus."
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <BlogCardGama
            thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-7.png"}
            writter="John Smith"
            date="November 17, 2022"
            title="Duis pretium sit amet nisi a malesuada fusce congue."
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <BlogCardGama
            thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-8.png"}
            writter="John Smith"
            date="November 17, 2022"
            title="Nam efficitur facilisis tinciduntent curabitur vitae."
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <BlogCardGama
            thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-9.png"}
            writter="John Smith"
            date="November 17, 2022"
            title="Variustempor convallis, mi ligula an suscipit nunc."
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <BlogCardGama
            thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-10.png"}
            writter="John Smith"
            date="November 17, 2022"
            title="Nullam tristique laoreet tortor, in interdum elit."
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <BlogCardGama
            thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-11.png"}
            writter="John Smith"
            date="November 17, 2022"
            title="Mauris commodo massa vel diamnat feugiat sagittis Nunc."
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <BlogCardGama
            thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-12.png"}
            writter="John Smith"
            date="November 17, 2022"
            title="Fusce tristique placerat arcu, eget interdum lacus."
          />
        </div>
      </div>
    </>
  );
}

export default BlogCardWrap;

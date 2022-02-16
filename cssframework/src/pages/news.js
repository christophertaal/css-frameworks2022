import news_img_1 from '../images/news/news-1.jpg'
import news_img_2 from '../images/news/news-2.jpg'
import news_img_3 from '../images/news/news-3.jpg'
import news_img_4 from '../images/news/news-4.jpg'
import news_img_5 from '../images/news/news-5.jpg'
import news_img_6 from '../images/news/news-6.jpg'
import news_img_7 from '../images/news/news-7.jpg'
import news_img_8 from '../images/news/news-8.jpg'

const News = () => {
    return (
        <div>
            <section id="main-section">
            <h1 id="news-header" className="pt-5">News</h1>
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item">
                    <a className="page-link active" href="#">1 <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                </ul>
            </nav>
            <div className="container-fluid bg-trasparent my-0 p-3" style={{'position': 'relative'}}>
                <div id="news" className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                    <div className="col">
                        <div className="card h-100 shadow-sm"> <img src={news_img_1} className="card-img-top" alt="image0"/>
                            <div className="card-body">
                                <h1>Nunc pottitor vel</h1>
                                <h5 className="card-title">Nunc malesuda eget est fringilla dapibus</h5>
                                <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{'width': '85%' }}aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-sm"> <img src={news_img_2} className="card-img-top" alt="image1"/>
                            <div className="card-body">
                                <h1>Nunc pottitor vel</h1>
                                <h5 className="card-title">Nunc malesuda eget est fringilla dapibus</h5>
                                <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{'width': '85%' }}aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-sm"> <img src={news_img_3} className="card-img-top" alt="image2"/>
                            <div className="card-body">
                                <h1>Nunc pottitor vel</h1>
                                <h5 className="card-title">Nunc malesuda eget est fringilla dapibus</h5>
                                <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{'width': '85%' }}aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-sm"> <img src={news_img_4} className="card-img-top" alt="image2"/>
                            <div className="card-body">
                                <h1>Nunc pottitor vel</h1>
                                <h5 className="card-title">Nunc malesuda eget est fringilla dapibus</h5>
                                <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{'width': '85%' }}aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-sm"> <img src={news_img_5} className="card-img-top" alt="image3"/>
                            <div className="card-body">
                                <h1>Nunc pottitor vel</h1>
                                <h5 className="card-title">Nunc malesuda eget est fringilla dapibus</h5>
                                <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{'width': '85%' }}aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-sm"> <img src={news_img_6} className="card-img-top" alt="image4"/>
                            <div className="card-body">
                                <h1>Nunc pottitor vel</h1>
                                <h5 className="card-title">Nunc malesuda eget est fringilla dapibus</h5>
                                <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{'width': '85%' }}aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-sm"> <img src={news_img_7} className="card-img-top" alt="image5"/>
                            <div className="card-body">
                                <h1>Nunc pottitor vel</h1>
                                <h5 className="card-title">Nunc malesuda eget est fringilla dapibus</h5>
                                <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{'width': '85%' }}aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-sm"> <img src={news_img_8} className="card-img-top" alt="image6"/>
                            <div className="card-body">
                                <h1>Nunc pottitor vel</h1>
                                <h5 className="card-title">Nunc malesuda eget est fringilla dapibus</h5>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{'width': '85%' }}aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item">
                    <a className="page-link active" href="#">1 <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                </ul>
            </nav>
            </section>

        </div>
    );
}

export default News;
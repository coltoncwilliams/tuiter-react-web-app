import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
      <div class="row align-items-center">
        <div class="input-group col">
          <span class="input-group-prepend bg-white form-rounded">
            <div class="input-group-text bg-transparent"><i class="fa fa-search text-dark mt-1"></i></div>
          </span>
          <input class="form-control border-left-0 form-rounded d-inline" type="search" placeholder="Search Twitter">
        </div>
        <i class="col-auto fa fa-gear fa-2x text-primary"></i>
      </div>

      <ul class="nav nav-tabs mt-1 mb-1">
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For You</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-sm-none d-md-block">
          <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
      </ul>

      <div class="thumbnail">
        <img src="../../images/starship.webp" alt="" class="img-fluid">
        <div class="caption">
          <h3 class="font-weight-bold text-white">SpaceX's Starship</h3>
        </div>
      </div>
      ${PostSummaryList()}
    `);
}
export default ExploreComponent;

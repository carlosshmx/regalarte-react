import ProductsCardList from "./ProductsCardList";
import ProductCard from "./ProfuctCard";

export default function AsideMenu(){
    return(
        <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Todos</button>
          <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Cakes</button>
          <button className="nav-link" id="v-pills-donuts-tab" data-bs-toggle="pill" data-bs-target="#v-pills-donuts" type="button" role="tab" aria-controls="v-pills-donuts" aria-selected="false" >Donas</button>
          <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Cupcakes</button>
          <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Tequeños</button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0"><ProductsCardList/></div>
          <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">...</div>
          <div className="tab-pane fade" id="v-pills-donuts" role="tabpanel" aria-labelledby="v-pills-donuts-tab" tabIndex="0">...</div>
          <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">...</div>
          <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex="0">...</div>
        </div>
      </div>
    )
}
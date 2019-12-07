import React, {Component}                from 'react';
import {connect}                         from 'react-redux';
import {filterByCountry, filterBySearch} from "../../actions";

class Filter extends Component {

  onFilterByCountry = (country) => {

    const {filterByCountry} = this.props;
    filterByCountry(country);
  };

  onFilterBySearch = (search) => {

    const {filterBySearch} = this.props;
    filterBySearch(search);
  };

  render() {
    const {countries, status} = this.props;
    const {bySearch} = status;

    return (
      <div className="row">
        <div className="col-12 col-md-6 col-lg-5 offset-lg-1 col-xl-4 offset-xl-2">
          <form action="#" className="shop__search">
            <div className="shop__search-wrapper{/* filled*/}">
              <label className="shop__search-label" htmlFor="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                className="shop__search-input"
                onChange={(e) => this.onFilterBySearch(e.target.value)}
                value = {bySearch}
                autoFocus
              />
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6 col-lg-5 col-lx-4">
          <div className="shop__filter">
            <div className="shop__filter-label">
              Or filter
            </div>
            <div className="shop__filter-group">
              {
                countries.map((country, index) => {
                  return <button
                    onClick={() => this.onFilterByCountry(country)}
                    className="shop__filter-btn"
                    key={index}
                  >
                    {country}
                  </button>
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({filterCountries, filterState}) => {
  return {
    countries: filterCountries,
    status: filterState
  }
};

const mapDispatchToProps = {
  filterByCountry,
  filterBySearch
};


export default connect(mapStateToProps, mapDispatchToProps)(Filter);

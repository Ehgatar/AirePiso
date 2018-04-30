import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }


  render () {
    return (<section className="Listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>

        <section className="sortby-area">
          <div>
            390 results found
          </div>
  
          {/* Creating the sortby area in main page */}
          <div className="sort-options">
            <select name="sortby" className="sortby">
              <option value ="price-asc">Highest Price</option>
              <option value ="price-dsc">Lowest Price</option> 
            </select>
            {/* FONT AWESOME USED BELOW */}
              <div className="view">
              <i className="fa fa-th-list" aria-hhidden="true"></i>
              <i className="fa fa-th" aria-hidden="true"></i>
              </div>  
          </div>
        </section>
        
        {/* listing results sets the pictures */}
        <section className="listings-results">
          <div className="listing">
           <div className="listing-img">
                <span className="Address"> Address</span>
{/* details will change and give more details upon hover */}
            <div className="details">
            <div className="user-img"></div>
            <div className="user-details">
              <span className="user-name">Don Tinimbang</span>
              <span className="post-date">05/19/2018</span>
            </div>
            </div> 
          </div>
          </div>
        </section>
        

        <section className="pagination">

        </section>

        </section>)
  }
}



